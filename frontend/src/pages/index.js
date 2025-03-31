import { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/list');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Post Board</h1>
        <div className={styles.content}>
          <PostForm onNewPost={handleNewPost} />
          <PostList 
            posts={posts} 
            loading={loading} 
            error={error} 
            onRefresh={fetchPosts} 
          />
        </div>
      </main>
    </div>
  );
}