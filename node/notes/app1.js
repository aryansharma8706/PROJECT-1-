//creating an express server instead of http

const express = require('express');
const app = express();
const fs = require('fs');
//middleware => middleware are the fn which we can use in the express , middleware have access to the req , and response object
//here the use of express.json() middleware is that when the data comes from the client in the req it comes in buffer  or in chunks what .json() does it parse the data into an js object then set this data on req.body property , so that can be accessed in the api routes
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from the express');
});
//implementing crud operation using express
//NOTE GET ALL NEWS :
app.get('/news', (req, res) => {
  fs.readFile('news.json', 'utf-8', (err, data) => {
    if (data) {
      // res.status(200).send(data)
      res.status(200).json({
        message: 'success',
        length: JSON.parse(data).length,
        data,
      });
    } else {
      res.status(500).send(err);
    }
  });
});
//get single news
app.get('/news/:id', (req, res) => {
  const id = +req.params.id;
  console.log(typeof id);
  const data = fs.readFileSync('news.json', 'utf-8');
  const convertedData = JSON.parse(data);
  const singleNews = convertedData.find((d) => d.id === id);
  res.status(200).json({
    data: singleNews,
  });
});

//add a new article //create an article
app.post('/news', (req, res) => {
  console.log('data from client', req.body);
  const { title, author, description, date } = req.body;
  const allNews = fs.readFileSync('news.json', 'utf-8');
  console.log(allNews);
  const parseNews = JSON.parse(allNews);
  const IdNew = parseNews[parseNews.length - 1].id + 1;
  console.log(IdNew);

  const newNewsData = {
    id: IdNew,
    author,
    title,
    description,
    date,
  };
  console.log(newNewsData);
  parseNews.push(newNewsData);
  fs.writeFile('news.json', JSON.stringify(parseNews), () => {
    res.send('New article added ');
  });
  //calculating id for new item
});

//create a update api (use put , patch method) for an article suppose url will be /news/:id => news/2 like i have to update the 2 article author 
//delete api using delete method => suppose i have to delete article with id : 3 you have to make a route like /news/:id => news/3 with delete method => then use req.params.id to parse the id and convert to number then parse the data form news.json file and dlete the article which have id 3
app.listen(3000, () => {
  console.log('server is running on 3000 port');
});
