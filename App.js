import React, { useState } from 'react';
import './App.css';
import { IoCloseCircle } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/chat', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <IoCloseCircle className='icon'/>
        <div className='bot'>
          <FaRobot className='boticon'/>
          <h6>{response ? response : "Hi, how may I help you?"}</h6>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            name='Text..'
            rows='2'
            cols='35'
            placeholder='Type your message here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type='submit' name='submit' value='SEND'></input>
        </form>
      </div>
    </>
  );
}



export default App;
