const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const peers = []
const posts = []
const profile = {
  avatar: 'https://i.imgur.com/N3zJZfB.png',
  name: 'Darigo',
  bio: 'catch me on twt: https://twitter.com/darigh0st'
}
const domain = 'localhost'

app.post('/peers', (req, res) => {
  const { metadata } = req.body;
  peers.push(metadata)
  return res.status(201).json(
    { success: true, message: 'Peer signed up successfully' });
});

app.get('/peers', (_req, res) => {
  res.json(peers);
});

app.get('/posts', (_req, res) => {
  res.json(posts);
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
