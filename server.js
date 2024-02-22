const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const peers = ['127.0.0.1:3002']
const posts = []
const profile = {
  avatar: 'https://i.imgur.com/N3zJZfB.png',
  name: 'Darigo',
  bio: 'catch me on twt: https://twitter.com/darigh0st'
}
const domain = 'localhost'

app.get('/posts', async (req, res) => {
  try {
    let allPosts = [];
    for (const hostname of peers) {
      const response = await axios.get(`http://${hostname}/posts`);
      allPosts = allPosts.concat(response.data).concat(posts);
    }
    res.json(allPosts);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/posts', (req, res) => {
  const { post } = req.body;
  posts.push({ date: new Date().toLocaleString(), post, from: `${profile.name}@${domain}` })
  console.log(posts)
  return res.status(201).json(
    { success: true, message: 'Post published successfully' });
});

app.get('/profile', (_req, res) => {
  res.json(profile)
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
