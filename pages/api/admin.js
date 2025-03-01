export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (username === 'mgcuptime' && password === 'emirhan1252602') {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
