import styles from '../styles/PostList.module.css';

export default function PostList({ posts, loading, error, onRefresh }) {
  if (loading) return <div className={styles.loading}>Loading posts...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Posts</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className={styles.list}>
          {posts.map(post => (
            <li key={post.id} className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}