import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/setCookie";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MessageSeparator,
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  TypingIndicator,
  Search,
} from "@chatscope/chat-ui-kit-react";
import "./style.scss";

const ChatroomPage = () => {
  const isUserLoggedIn = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  });

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
              <Search placeholder="Search..." />
            </div>
            <ConversationList style={{ height: "52vh", overflow: "auto" }}>
              <Conversation
                name="Lilly"
                lastSenderName="Lilly"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Joe"
                lastSenderName="Joe"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Emily"
                lastSenderName="Emily"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Kai"
                lastSenderName="Kai"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Akane"
                lastSenderName="Akane"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Eliot"
                lastSenderName="Eliot"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Zoe"
                lastSenderName="Zoe"
                info="Yes i can do it for you"
              ></Conversation>

              <Conversation
                name="Patrik"
                lastSenderName="Patrik"
                info="Yes i can do it for you"
              ></Conversation>
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
              <MessageList
                typingIndicator={<TypingIndicator content="Joe is typing" />}
              >
                <MessageSeparator content={new Date().toDateString()} />

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

                <MessageSeparator content="Saturday, 31 November 2019" />

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
