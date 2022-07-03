import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function CreateNews() {
  const [input, setInput] = useState({
    title: '',
    content: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const handleClick = (e) => {
    e.preventDefault();
    setInput({ title: '', content: '' });
    const newNews = {
      title: input.title,
      content: input.content
    }
    axios.post("http://localhost:5000/create", newNews);
    navigate('/news');
  }

  return (
    <>
      <div className="container shadow rounded p-3">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Create News</h1>
          <div className="form-group my-2">
            <label htmlFor="inputNews" className="sr-only mb-md-2">News Title</label>
            <input type="text" id="inputNews" className="form-control" name='title' placeholder="Enter Your News" required="" autoComplete="off" onChange={handleChange} value={input.title} />
          </div>
          <div className="form-group my-2">
            <label htmlFor="inputWrite" className="sr-only mb-md-2">Write News</label>
            <textarea className="form-control" id='inputWrite' placeholder='Describe your news' name='content' autoComplete="off" onChange={handleChange} value={input.content}></textarea>
          </div>
          <button onClick={handleClick} className="btn btn-lg btn-success btn-block" type="submit">Add News</button>
          <p className="my-4 text-muted">© Javohir</p>
        </form>
      </div>
    </>
  )
}