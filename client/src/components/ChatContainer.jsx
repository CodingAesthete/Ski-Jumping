import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer({ currentChat, socket }) {
  const { currentUser } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [canScroll, setCanScroll] = useState(true); // State to control scrolling

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "instant" });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/messages/getmsg`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: currentUser._id,
            to: currentChat._id,
          })
        });
        const data = await response.json();
        setMessages(data);
        console.log("Messages:", data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchData();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      msg,
    });

    const res = await fetch(`/api/messages/addmsg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: currentUser._id,
        to: currentChat._id,
        message: msg,
      })
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
    scrollToBottom(); // Scroll to bottom after sending message
  };

  useEffect(() => {
    if (socket.current) {
      console.log("Setting up event listener for msg-receive");
      socket.current.on("msg-receive", (msg) => {
        console.log("Received message:", msg);
        if (msg.to === currentChat._id) {
          setArrivalMessage({ fromSelf: false, message: msg.msg });
        }
      });
    }

    return () => {
      if (socket.current) {
        socket.current.off("msg-receive");
      }
    };
  }, [currentChat]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
      setArrivalMessage(null); // Clear arrivalMessage after adding it to messages
      scrollToBottom(); // Scroll to bottom after receiving message
    }
  }, [arrivalMessage]);

  return (
    <Container handleClick={handleClick}>
      <div className="chat-header">
        <div className=" user-details">
          <div className="avatar">
            <img
              src={currentChat.avatar}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div key={uuidv4()}>
              <div
                className={`message ${message.fromSelf ? "sended" : "recieved"
                  }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef}></div>
      </div>
      <ChatInput className='chat-input' handleSendMsg={handleSendMsg} handleClick={handleClick} />

    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 74.5% 15.5%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  @media screen and (min-width: 375px) and (max-width: 719px) {
    max-height: 60vh;
    grid-template-rows: auto 1fr auto;
  }
  .chat-header {
    z-index: 100;
    border-radius: 0 0.5rem 0 0;
    font-size: 1.02rem;
    background-color: rgb(0, 60, 149);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75rem 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      .avatar {
        img {
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 100%;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 1rem;
        color: white;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
          font-size: 0.9rem;
        }
        @media screen and (min-width: 375px) and (max-width: 719px) {
          max-width: 70%;
          font-size: 0.9rem;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: rgb(0, 0, 153);
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: rgb(0, 115, 230);
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 719px) {
    .chat-input {
      margin-top: auto; /* This will push the chat input to the bottom */
    }

    .chat-header{
      display:none;
    }
  }
`;