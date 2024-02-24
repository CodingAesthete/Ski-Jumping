import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HallOfFame from './pages/HallOfFame';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LearnMore from './pages/LearnMore';
import Ranking from './pages/Ranking';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Chat from './pages/Chat';
import CreatePost from './pages/CreatePost';

export default function App() {
  useEffect(() => {
    // Ping the server every 5 minutes
    const pingServer = () => {
      fetch('/keep-alive')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to ping server');
          }
        })
        .catch(error => console.error('Error pinging server:', error));
    };

    const interval = setInterval(pingServer, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/post" element={<CreatePost />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}
