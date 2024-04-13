/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import io from "socket.io-client";
import chatEmpty from "../../assets/images/book2.jpg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/setCookie";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
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
  const isUserLoggedIn = getCookie("token");
  const [allUsers, setUsers] = useState([]);
  const [allChatrooms, setAllChatrooms] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [activeChat, setActiveChat] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const socket = io(`${chatSocketUrl}?${isUserLoggedIn}`);
    console.log(chatSocketUrl, "CHATSOCKET URL");
    // Listen for incoming messages
    socket.on("message", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
            setActiveChat(data[0].uuid);
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
    if (activeChat) {
      try {
        getAllChatRoomMessages(activeChat)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            if (data) {
              setAllMessages(data);
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
    console.log(selectedOption);
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
                  {allChatrooms.map((eachRoom) => (
                    <Conversation
                      key={eachRoom.uuid}
                      name={eachRoom.name}
                      active={activeChat === eachRoom.uuid}
                      info={eachRoom.last_message}
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
                {allMessages.map((eachMessage) => {
                  <Message
                    key={eachMessage.uuid}
                    model={{
                      message: "Hello my friend",
                      sentTime: "15 mins ago",
                      sender: "Joe",
                      direction: "incoming",
                      position: "normal",
                    }}
                    avatarSpacer
                  />;
                })}
                <Message
                  model={{
                    message:
                      "Hello my friend, this has been a great help for me",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "single",
                  }}
                >
                  {" "}
                  <Message.Footer
                    sender="Emily"
                    sentTime={new Date().toDateString()}
                  />
                </Message>

                <Message
                  model={{
                    message:
                      "The project was great and I am looking for ward to it",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "single",
                  }}
                >
                  {" "}
                  <Message.Footer
                    sender="Raj"
                    sentTime={new Date().toDateString()}
                  />
                </Message>

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "last",
                  }}
                ></Message>

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "first",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "normal",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "normal",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "last",
                  }}
                />

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "last",
                  }}
                ></Message>
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "single",
                  }}
                ></Message>

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "single",
                  }}
                />

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "normal",
                  }}
                >
                  <Message.Footer sender="Emily" sentTime="just now" />
                </Message>

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "first",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "normal",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "normal",
                  }}
                >
                  <Message.Footer sender="Emily" sentTime="just now" />
                </Message>
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Seema",
                    direction: "outgoing",
                    position: "last",
                  }}
                />

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Joe",
                    direction: "incoming",
                    position: "last",
                  }}
                >
                  <Message.Footer sender="Emily" sentTime="just now" />
                </Message>
              </MessageList>
              <MessageInput className="p-4" placeholder="Type message here" />
            </ChatContainer>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatroomPage;
