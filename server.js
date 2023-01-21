import express from 'express'; 

const app = express();
const port = process.env.PORT || 5000; 

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/get-random-quote', async (req, res) => {
  console.log('api fething');
  let data = await fetch('https://zenquotes.io/api/random');
  let resp = await data.json();
  res.json(resp);
});

app.listen(port, () => console.log(`Listening on port ${port}`));