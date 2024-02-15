import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HallOfFame from './pages/HallOfFame';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SkiJumpers from './pages/SkiJumpers';
import WorldCup from './pages/WorldCup';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Chat from './pages/Chat';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/ski-jumpers" element={<SkiJumpers />} />
        <Route path="/world-cup" element={<WorldCup />} />
      </Routes>
    </BrowserRouter>
  )
}