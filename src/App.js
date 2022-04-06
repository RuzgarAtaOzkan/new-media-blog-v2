// MODULES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import HomeLayout from './components/Layouts/Home';
import PostLayout from './components/Layouts/Post';

// PAGES
import HomePage from './pages/Home';
import Post1 from './pages/Post1';

// STYLES
import './styles/index.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeLayout element={<HomePage />} />} />

          <Route
            path="/posts/:id"
            element={<PostLayout element={<Post1 />} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
