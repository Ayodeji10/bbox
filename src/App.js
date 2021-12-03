import React, { useState, useEffect } from 'react';
import ScrollToTop from '../src/components/scrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataContext } from './dataContext';
import Home from './screens/Home';
import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Signup2 from './screens/Signup2';
import Stories from './screens/Stories';
import Profiles from './screens/Profiles';
import PersonalProfile from './screens/PersonalProfile';
import ProfileSettings from './screens/Settings';
import Polls from './screens/Polls';
import SinglePoll from './screens/SinglePoll';
import Search from './screens/Search';

function App() {
  // context 
  const [context, setContext] = useState({
    signUpForm: { email: '', password: '', number: '', name: '', username: "", profilePicture: null },
    user: {}
  })

  // save context to local storage
  useEffect(() => {
    const storedData = localStorage.getItem('context')
    if (storedData) {
      setContext(JSON.parse(storedData))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('context', JSON.stringify(context))
  })

  return (
    <Router>
      <ScrollToTop />
      <DataContext.Provider value={{ context, setContext }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/finish-signup" element={<Signup2 />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/profile/:Id" element={<ProfileSettings />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/single-poll" element={<SinglePoll />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
