// //NOTE COMMON JS MODULES
// const { college, firstName } = require('./script.js');
// const product = require('./new.js');
// console.log(college, firstName, product);

// // console.log(process)
// // console.log(global)

// //inbuilt modules filesystem

// const fs = require('fs');

// //two types of function available synchronous and async

// //SYNCRONOUS FUNCTION  BLOCKING CODE
// // console.log('file reading started ....');
// // const data = fs.readFileSync('./read.txt', 'utf-8');
// // console.log(data);
// // console.log('file reading ended....');

// //ASYNC VERSION NON BLOCKING

// console.log('async read file started...');

// // fs.readFile('./read.txt', 'utf-8', (err, data) => {
// //   console.log(data);
// //   fs.writeFileSync('transfer.txt', data);
// // });
// // console.log('async file ended ...');
// //filepath = ['file1.txt' , 'file2.txt']
// // readMultipleFile(filePath)

// //NOTE WRITE FILE ASYNC OR SYNC ;

// fs.writeFile('newfile.txt', 'THIS IS WRITTEN USING WRITEFILE', () => {
//   console.log('success');
// });
// //create a data.txt file read the data from that file and write a new file to transfer the data.

// //imp writing object to any file
// const productData = [{ name: 'lg ac' }, { nae: 'samsung tv' }];

// fs.writeFile('product.json' ,  JSON.stringify(productData) , ()=>{
//     console.log('success')
// })

// //add new data to existing file
// // fs.appendFile('read.txt' , '\n this is data',()=>{
// //     console.log('append success')
// // }
// // )

// //unlink  delete the existing file
// fs.unlink('read.txt', (err)=>{
// console.log(err)
// })

// //mkdir
// fs.mkdir('folder' , ()=>{

// })

// console.log(fs)

//NOTE PATH (directory ya file path)
const path = require('path');

// __filename __dirname
console.log(__filename); //gives the absolute path of you current file you are working in
console.log(__dirname); //gives the absolute path of the directory which you current file exist .

//path.join
//NOTE join the files and folder you pass as a argument in the join method to make the path
const paths = path.join('home', 'desktop', 'users');
console.log(paths);

//used when you have to find the path for any file when using fs module
const completePath = path.join(__dirname, 'product.json');
console.log(completePath);

//NOTE path.resolve
//what path.resolve does it automatically get the abosolute url for the current working directly then it add the file and folder you are going to pass in the path.resolve method
const completepath = path.resolve('script.js');
console.log(completepath);

const fs = require('fs');
fs.readFile(path.resolve('transfer.txt'), 'utf-8', (err, data) => {
  console.log(data);
});

//NOTE get file name
console.log(path.basename('/folder/file.txt'));
//NOTE  get file extension
console.log(path.extname('file.txt'));

//NOTE get directory name
console.log(path.dirname('/newfolder/file.txt'));

//os module

const os = require('os');
console.log(os.platform());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.cpus());
console.log(os.arch());

//NOTE HTTP
