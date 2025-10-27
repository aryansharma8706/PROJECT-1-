const express = require('express');
const app = express();

const PORT = 3000;

//NOTE MIDDLEWARES
//NOTE => Middleware Are The Functions In The express which have access to the req,res and next middleware function  , middleware can run any code and  access request and response object and modify them, then this modification on the req  can be available for next middleware in the req-res cylce.
app.use((req, res, next) => {
  console.log('middleware first is running');
  next();
});

app.use((req, res, next) => {
  console.log('middleware 2 is running');
  next();
});

//express.json()
app.use((req, res, next) => {
  req.body = { name: 'TEST' };
  next();
});

app.get('/health', (req, res) => {
  res.send('running');
});

app.post('/name', (req, res) => {
  console.log(req.body);
});

//ROUTE SPECIFIC MIDDLEWARE TO CHECK IF KEY IS VALID
function CheckApiKey(req, res, next) {
  console.log('running checkapikey middleware');
  const apiKey = req.params.apiKey;
  console.log(apiKey);
  if (apiKey === 'test@123') {
    next();
  } else {
    res.status(401).send('INVALID API KEY');
  }
}
app.get('/movies/:apiKey', CheckApiKey, (req, res) => {
  res.send('MOVIES DATA');
});

//routes group
app
  .route('/blogs')
  .get((req, res) => {
    res.send('all blogs');
  })
  .post((req, res) => {
    res.send('blog created ');
  });
//create a route group for update ,deleete and get single blog
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
