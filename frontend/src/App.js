import './App.css';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import Submit from './components/Submit';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          Welcome to postiverse!
        </h1>
        A federated posting app.
        <Submit />

      </header>
      <section style={{marginTop: '30px', color: 'darkgray'}} id='posts'>
        {(posts.length === 0) 
          ? "No posts to show..." 
          : posts.map(p => Post({...p}))
        }
      </section>
      <hr />
    </div>
  );
}

export default App;
