export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const authHeader = req.headers['pinggyauthheader'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Auth code is required' });
    }
  
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(400).json({ message: 'Title and body are required' });
    }
  
    const newPost = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString()
    };
  
    res.status(201).json(newPost);
  }