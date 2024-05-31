
import React from 'react';
import './body.css';


function App() {
  const posts = [
    {
      title: 'Blog 1',
      date: 'May 31, 2024',
      author: 'Sakshi Patel',
      image: 'https://via.placeholder.com/800x400',
      text: 'There is a certain allure to embarking on a voyage to discover uncharted territory. With every step you take, you welcome the unknown and bid farewell to the known, unleashing a world of opportunities and experiences. You may escape the boredom of daily life, the constraints of routine and responsibilities, and find the thrill of living in the present by travelling. Every vacation, whether you are road travelling across the nation, backpacking across Europe, or just spending the weekend in a neighbouring town, has the power to change you in ways you never would have predicted.',
    },
    {
      title: 'Blog 2',
      date: 'June 1, 2024',
      author: 'Sakshi Patel',
      image: 'https://via.placeholder.com/800x400',
      text: 'Exploring new locations is not the only thing that makes travel exciting; its also about experiencing other cultures, trying out unique foods, and getting to know interesting people. Every excursion gives a different experience that enlivens the spirit, whether you are strolling through the tranquil countryside or experiencing the busy streets of a bustling metropolis. Travelling is a journey of wonder and discovery, from the exhilaration of adventure sports to the serenity of a beachside sunset.',
    },
  ];

  return (
    <div className="App">
      
      
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.date} by {post.author}</p>
            <img src="travel.jpg" alt={post.title} />
            <p>{post.text}</p>
            <hr />
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default App;