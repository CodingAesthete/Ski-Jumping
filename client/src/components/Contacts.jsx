import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Contacts({ contacts, changeChat }) {
  const { currentUser } = useSelector((state) => state.user);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      setLoading(false);
    }
  }, [contacts]);

  const username = currentUser.username;
  const avatar = currentUser.avatar;

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <div className="brand">
          <h3>Messages</h3>
        </div>
        <div className="contacts">
          {contacts.map((contact, index) => {
            return (
              <div
                key={contact._id}
                className={`contact ${index === currentSelected ? "selected" : ""
                  }`}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img
                    src={`${contact.avatar}`}
                    alt=""
                    className='w-12 rounded-full'
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="current-user">
          <div className="avatar">
            <img
              src={avatar}
              alt="avatar"
            />
          </div>
          <div className="username">
            <h2>{username}</h2>
          </div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
border-radius:0.5rem 0 0 0.5rem;
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: rgb(0, 128, 255);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      font-size: 1.05rem;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: rgb(31, 31, 122);
    padding:0.8rem;
    display: flex;
    font-size:1.2rem;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        border-radius:100%;
        display:block;
        height: 3rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 719px) {
    .current-user {
      display: none;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 719px) {
    .contacts {
      max-height: 7rem;
      margin-top:0.5rem;
    };

    .brand h3{
      display:none;
    };
  }
`;