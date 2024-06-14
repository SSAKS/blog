import React, { useState } from 'react';
import './post.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const postsData = [
  {
    id: 1,
    title: 'Exploring the Mountains',
    image: 'https://blog-content.ixigo.com/wp-content/uploads/2022/04/5-reasons-to-visit-Kashmir.jpeg',
    excerpt: 'A journey through the majestic mountain ranges.',
    content: 'Mountains are large landforms that rise above the surrounding land...',
    category: 'Mountains',
    liked: false,
  },
  {
    id: 2,
    title: 'A Day at the Beach',
    image: 'https://cdn.audleytravel.com/2803/1999/79/15984870-goa-beach-goa.jpg',
    excerpt: 'Relaxing and enjoying the sea breeze.',
    content: 'Beaches are landforms along the shoreline of an ocean, sea, lake, or river...',
    category: 'Beaches',
    liked: false,
  },
  {
    id: 3,
    title: 'Cityscape Adventures',
    image: 'https://thumbs.dreamstime.com/b/railway-station-victory-mumbai-india-8286286.jpg',
    excerpt: 'Exploring the urban jungle.',
    content: 'A cityscape is the urban equivalent of a landscape...',
    category: 'Cityscapes',
    liked: false,
  },
  {
    id: 4,
    title: 'The Serenity of the Countryside',
    image: 'https://c1.wallpaperflare.com/preview/515/22/553/village-field-sunset-way-highway-summer.jpg',
    excerpt: 'Finding peace in the rural landscapes.',
    content: 'The countryside is a geographic area that is located outside towns and cities...',
    category: 'Countryside',
    liked: false,
  },
  {
    id: 5,
    title: 'Timeless treasures in historic sites',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDgrm4x4swaRaUylch1U0Diwty8DxnVYgEg&s',
    excerpt: 'Finding peace in the rural landscapes.',
    content: 'The countryside is a geographic area that is located outside towns and cities...',
    category: 'Historic Sites',
    liked: false,
  },
  {
    id: 6,
    title: 'Uncover nature’s mysteries underground',
    image: 'https://ohmyomaha.com/wp-content/uploads/2022/10/Indian-Cave.jpg',
    excerpt: 'Finding peace in the rural landscapes.',
    content: 'The countryside is a geographic area that is located outside towns and cities...',
    category: 'Caves',
    liked: false,
  },
];

const Posts = () => {
  const [visiblePostId, setVisiblePostId] = useState(null);
  const [posts, setPosts] = useState(postsData);
  const [sortBy, setSortBy] = useState('title');
  const [filterBy, setFilterBy] = useState('All');

  const toggleContent = (id) => {
    setVisiblePostId(visiblePostId === id ? null : id);
  };

  const toggleLike = (id) => {
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, liked: !post.liked };
      }
      return post;
    });
    setPosts(newPosts);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value);
  };

  const filteredPosts = filterBy === 'All' ? posts : posts.filter(post => post.category === filterBy);

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="filterBy">Filter by : </label>
        <select id="filterBy" value={filterBy} onChange={handleFilterByChange}>
          <option value="All">All</option>
          <option value="Mountains">Mountains</option>
          <option value="Beaches">Beaches</option>
          <option value="Cityscapes">Cityscapes</option>
          <option value="Countryside">Countryside</option>
          <option value="Historic Sites">Historic Sites</option>
          <option value="Caves">Caves</option>
          {/* Add more options for filtering criteria */}
        </select>
      </div>
      <div className="posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <a href={post.image} target="_blank" rel="noopener noreferrer">
              <img
                src={post.image}
                alt={post.title}
                className="post-image"
                onClick={() => toggleContent(post.id)}
              />
            </a>
            <p>{post.excerpt}</p>
            {visiblePostId === post.id && <p className="post-content">{post.content}</p>}
            <div className="post-buttons">
              <button onClick={() => toggleLike(post.id)} className="like-button">
              <i className={post.liked ? 'fas fa-heart liked' : 'far fa-heart'}></i>
            </button>
            <button onClick={() => toggleContent(post.id)}>
              {visiblePostId === post.id ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Posts;
