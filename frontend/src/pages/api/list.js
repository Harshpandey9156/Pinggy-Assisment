export default function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const samplePosts = [
      {
        id: 1,
        title: 'Welcome to the Post Board',
        body: 'This is a sample post. Create your own!',
        createdAt: new Date().toISOString()
      }
    ];
  
    res.status(200).json(samplePosts);
  }