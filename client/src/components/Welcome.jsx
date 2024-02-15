import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function Welcome() {
  const { currentUser } = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");

  return (
    <Container>
      <img src='https://digwallpapers.com/wallpapers/full/5/0/9/35503-2560x1600-snowy-night-wallpaper-desktop-hd.jpg' alt="" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size:1.05rem;
  color:rgb(31, 31, 122);
  font-weight:700;
  img {
    height: 12rem;
    margin-bottom:1rem;
    opacity:1;
    border-radius:0.25rem;
  }
  h1{
    margin-bottom:0.15rem;
  }
  span {
    color: rgb(0, 0, 255);
    font-weight:bold;
  }
  h3{
    font-weight: 500;
  }
`;