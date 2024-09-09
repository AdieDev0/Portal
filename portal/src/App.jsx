import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Log from './Components/Log';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen bg-stone-700 p-5">
        <Routes>
          {/* Redirect root ("/") to "/login" */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Log />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
