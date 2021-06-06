// const amount = 12;

// if(amount < 10) {
//     console.log('small number');
// } else console.log('large number');

// console.log('my first node js app');

// 1
// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// // console.log(process);

// 2
// const names = require('./var');
// const sayHi = require('./fn');

// const mem1 = require('./alter')
// console.log(mem1.alo);
// console.log(mem1.items[0]);

// sayHi(names.alo);
// sayHi(names.shika);
// sayHi(names)
// console.log(module);


// 3


// const os = require('os');

// const user = os.userInfo()

// // console.log(os.constants);

// const infos = {
//     name : os.type(),
//     release : os.release(),
//     totalmem : os.totalmem(),
//     freemem : os.freemem()
// }

// console.log(infos);

// 4

// const path = require('path')

// console.log(path.sep);

// 5

// const {readFileSync, writeFileSync} = require('fs')

// console.log(readFileSync('./content/sub/first.txt', 'utf8'));

// console.log(writeFileSync('./content/sub/second.txt','what u r gonna do about it and this is blody sec you shit for append',{flag: 'a'}));


// 6
// const {readFile,writeFile} = require('fs')

// readFile('./content/sub/first.txt','utf8',(err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first = result
//     readFile('./content/sub/second.txt', 'utf8', (err, result) => {
//         if(err){
//             console.log(err);
//             return
//         }
//         const second = result;

//         writeFile('./content/sub/new.txt',`this is the new one ${first} and ${second} and lets enroll to other`,(err,result) => {
//             if(err) {
//                 return;
//             }
//         })
//     })
// })



// 7


const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('cheating the hell out of it')
    }

    if(req.url ==='/about'){
        res.end('you r in the f**n about page')
    }
    else{
        res.end(`
        <h1>oops you are out of our league body </h1>
        <a href='/'>back home mate !! </a>
    `)
    }
})

server.listen(5000)