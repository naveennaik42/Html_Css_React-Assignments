import React, { useState } from 'react';
import './Postview.css';
import axios from 'axios';
const logo = 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
const camera = 'https://images.unsplash.com/photo-1551817959-7c131576acb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbWVyYSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
const dots = 'https://th.bing.com/th/id/OIP.rs7gQNsa8xUWw3or3xVVywHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7'
const sendbutton = 'https://th.bing.com/th/id/OIP.S5EvflUWsSi306uHfNG5EwAAAA?w=146&h=150&c=7&r=0&o=5&pid=1.7'
const heart = 'https://i1.wp.com/www.vectorico.com/wp-content/uploads/2019/01/heart-icon.png'
const Postview = () => {
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3004/user").then(res => {
      setPost(res.data);
    })
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            width="58" alt='logo'
          />
        </div>
        <div className="name">
          <h1>Instaclone</h1>
        </div>
        <div className="camera">
          <img
            src={camera}
            alt="camera"
          />
        </div>
      </nav>
      {post.map((propos, idx) => {
        return (<>
          <div className="main-info" key={idx} style={{ margin: "20px 0" }}>
            <aside></aside>
            <section className="main-container">
              <header>
                <div className="name-loc">
                  <h3>{propos.name}</h3>
                  <span>{propos.location}</span>
                </div>
                <div className="dots">
                  <img
                    src={dots}
                    alt="threedots"
                  />
                </div>
              </header>
              <div className="image-container">
                <img
                  src={propos.PostImage}
                  alt="post-pic"
                />
              </div>
              <footer>
                <div className="likes-share-date">
                  <div className="like-share">
                    <img
                      src={heart}
                      alt="likes"
                    />
                    <img
                      src={sendbutton}
                      alt="share"
                    />
                  </div>
                  <div className="date">{new Date(propos.date).toLocaleDateString}</div>
                </div>
                <span>{propos.likes} likes</span>
                <h2>{propos.description}</h2>
              </footer>
            </section>
            <aside></aside>
          </div>
        </>
        )
      })}
    </>
  );
}
export default Postview;