/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import chatEmpty from "../../assets/images/book2.jpg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/setCookie";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { toast } from "react-toastify";
import Select from "react-select";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import "./style.scss";
import {
  getAllChatRoomMessages,
  getAllChatRooms,
  getAllChatUsers,
} from "../../services/http-request";

const chatSocketUrl = process.env.REACT_APP_CHAT_SOCKET_URL;

const ChatroomPage = () => {
  const token = getCookie("token");
  const [allUsers, setUsers] = useState([]);
  const [allChatrooms, setAllChatrooms] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [activeChat, setActiveChat] = useState({ index: "", uuid: "" });
  const [activeUser, setActiveUser] = useState({
    value: "",
    label: "",
  });
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  useEffect(() => {
    try {
      getAllChatUsers()
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data) {
            const allOptions = data.map((eachData) => ({
              value: eachData.username,
              label: `${eachData.first_name + eachData.last_name + " ("}${eachData.username + ")"}`,
            }));
            setUsers(allOptions);
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  }, []);

  useEffect(() => {
    try {
      getAllChatRooms()
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.length > 0) {
            setActiveChat({ index: 0, uuid: data[0].uuid });
            setAllChatrooms(data);
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  }, []);

  useEffect(() => {
    // Establish WebSocket connection
    const socketUrl = `${chatSocketUrl}?${token}`;
    const ws = new WebSocket(socketUrl);
    setSocket(ws);
    // Set up event listeners
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      // Handle incoming messages from the server
      const objectData = JSON.parse(event.data);
      if (objectData) {
        const checkIfAlreadyExists = allChatrooms.findIndex(
          (chat) => chat.uuid === objectData.room_uuid,
        );
        const updatedChatrooms = [...allChatrooms]; // Create a copy of allChatrooms array

        if (checkIfAlreadyExists > -1) {
          // Update existing chat room
          updatedChatrooms[checkIfAlreadyExists].last_message = objectData.text;
        } else {
          // Create a new chat room entry
          updatedChatrooms[activeChat.index].uuid = objectData.room_uuid;
          updatedChatrooms[activeChat.index].last_message = objectData.text;
        }

        // Set the updated chat rooms and activate the chat room
        setAllChatrooms(updatedChatrooms);
        setAllMessages([...allMessages]);
        setMessage(""); // Reset message input field if needed
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    // Cleanup function
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      // Check if WebSocket connection is open
      const stringData = {
        text: message,
      };
      const jsonData = activeChat.uuid
        ? { ...stringData, room_uuid: activeChat.uuid }
        : { ...stringData, user: activeUser.value };
      socket.send(JSON.stringify(jsonData));
    } else {
      console.log("WebSocket connection not established");
    }
  };

  console.log(message, "message data");

  useEffect(() => {
    if (activeChat) {
      try {
        getAllChatRoomMessages(activeChat.uuid)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            if (data.results) {
              setAllMessages(data.results);
            } else {
              toast.error(JSON.stringify(data));
            }
          });
      } catch (error) {
        console.error("Error:", error);
        toast.error(JSON.stringify(error));
      }
    }
  }, [activeChat]);

  const handleSelectChange = (selectedOption) => {
    setActiveUser(selectedOption);
    const addNewData = {
      uuid: "",
      name: selectedOption.value,
      image: "",
      last_message: "",
    };
    setAllChatrooms([addNewData, ...allChatrooms]);
    setActiveChat({ index: 0, uuid: "" });
    setAllMessages([]);
  };

  const NoMessage = () => (
    <div className="no-message-div d-flex-column align-items-center justify-content-center">
      <img
        className="card-img-top m-0"
        loading="lazy"
        src={chatEmpty}
        height={250}
        alt=""
      />
      <p className="text-center">No Messages Found</p>
    </div>
  );

  return (
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center justify-content-center chat-container">
      <div className="col-8 chat-column">
        <MainContainer className="main-chat-container">
          <div
            style={{
              height: "70vh",
              width: "30%",
              borderRight: "1px solid lightgrey",
            }}
          >
            <div
              className="p-4 border-bottom"
              style={{
                height: "6vh",
              }}
            >
              <h5>My Conversations</h5>
            </div>
            <div className="p-4 border-bottom">
              <Select
                isSearchable
                onChange={handleSelectChange}
                options={allUsers}
              />
            </div>
            <ConversationList style={{ height: "52vh", overflow: "auto" }}>
              {allChatrooms.length > 0 ? (
                <>
                  {allChatrooms.map((eachRoom, index) => (
                    <Conversation
                      key={eachRoom.uuid}
                      name={eachRoom.name}
                      active={activeChat.index === index}
                      info={eachRoom.last_message}
                      onClick={() =>
                        setActiveChat({ index, uuid: eachRoom.uuid })
                      }
                    >
                      <Avatar
                        name={eachRoom.name}
                        src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
                      />
                    </Conversation>
                  ))}
                </>
              ) : (
                <NoMessage />
              )}
            </ConversationList>
          </div>
          <div
            style={{
              height: "70vh",
              width: "70%",
            }}
          >
            <div
              className="p-4 border-bottom"
              style={{
                height: "6vh",
              }}
            >
              <h5>Conversations with Lily</h5>
            </div>
            <ChatContainer
              style={{
                height: "64vh",
              }}
            >
              <MessageList>
                {allMessages.length > 0
                  ? allMessages.map((eachMessage) => (
                      <Message
                        key={eachMessage.uuid}
                        model={{
                          message: String(eachMessage.text),
                          sentTime: "15 mins ago",
                          sender: eachMessage.user.username,
                          direction: eachMessage.self_message
                            ? "outgoing"
                            : "incoming",
                          position: "normal",
                        }}
                      />
                    ))
                  : ""}
              </MessageList>
              <MessageInput
                className="p-4"
                value={message}
                onChange={(value) => setMessage(value)}
                placeholder="Type message here"
                onSend={sendMessage}
              />
            </ChatContainer>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatroomPage;
