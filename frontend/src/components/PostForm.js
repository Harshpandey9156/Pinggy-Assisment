import { useState } from 'react';
import styles from '../styles/PostForm.module.css';

export default function PostForm({ onNewPost }) {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    authCode: ''
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'PinggyAuthHeader': formData.authCode
        },
        body: JSON.stringify({
          title: formData.title,
          body: formData.body
        })
      });

      if (!response.ok) {
        throw new Error(response.statusText || 'Submission failed');
      }

      const newPost = await response.json();
      onNewPost(newPost);
      setFormData({ title: '', body: '', authCode: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Post</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="authCode">Auth Code</label>
          <input
            type="text"
            id="authCode"
            value={formData.authCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}