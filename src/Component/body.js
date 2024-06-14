import React, { useState } from 'react';
import './body.css';
import myimage from './myimage.jpg';

function App() {
  const initialPosts = [
    {
      title: 'Blog 1',
      date: 'May 31, 2024',
      author: 'Sakshi Patel',
      image1: 'https://www.freepik.com/premium-photo/high-angle-view-personal-accessories-table_163648817.htm#fromView=search&page=1&position=8&uuid=c87e700f-4403-42bb-b321-83bd5ca97e1c',
      text: 'There is a certain allure to embarking on a voyage to discover uncharted territory...',
      liked: false,
    },
    {
      title: 'Blog 2',
      date: 'June 1, 2024',
      author: 'Sakshi Patel',
      image2: 'https://www.realitypremedia.com/blog/wp-content/uploads/2016/01/Image-processing-for-Travel-website.jpg',
      text: 'Exploring new locations is not the only thing that makes travel exciting...',
      liked: false,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].liked = !newPosts[index].liked;
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.date} by {post.author}</p>
            <img src={post.image1} alt={post.title} />
            <img src={post.image2} alt={post.title} />
            <img src={myimage} alt="Description of the image" />
            <p>{post.text}</p>
            <button onClick={() => toggleLike(index)}>
              {post.liked ? 'Unlike' : 'Like'}
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
