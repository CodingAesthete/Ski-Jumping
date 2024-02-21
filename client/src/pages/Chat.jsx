import { useSelector } from 'react-redux';
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';

export default function Chat() {
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      socket.current = io('http://localhost:5173');
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/auth/allusers/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          return;
        }
        setContacts((prevContacts) => data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentUser._id]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome className='welcome' />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
border-radius:0.5rem;
height: 80vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: rgb(92, 92, 214);
  opacity:90%;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    width:96vw;
    margin-bottom:0.5rem;
  }
  @media screen and (min-width: 375px) and (max-width: 719px) {
    width:96vw;
    margin-bottom:0.5rem;
  }
  .container {
    border-radius:0.5rem;
    height: 69vh;
    width: 64vw;
    background-color: rgb(179, 179, 255);
    display: grid;
    grid-template-columns: 30% 70%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
      width:96vw;
    }
    @media screen and (min-width: 375px) and (max-width: 719px) {
      display:flex;
      flex-direction:column-reverse;
      width:96vw;
      height:86vh;
    }
  }
`;