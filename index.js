const http = require('http');
const fs =require('fs')

let userCount=0;
let test='';
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url==='/home.html'){
        test='home.html'

    }
    else  if(req.url==='/contact.html'){
        test='contact.html'

    }
    else  if(req.url==='/product.html'){
        test='product.html'

    }
    else{

        test='index.html'

    }
    const files = fs.readFileSync("header.html");
    const file = fs.readFileSync(test);
    res.statusCode = 200;
    userCount++;
    // give correct input for html
    res.setHeader("Content-Type", "text/html");
    res.write(files)
    res.write('<div style="text-align: center;  position: absolute; top:200px ;left:550px" ;>We have had   '  +  userCount +  '   visits!\n</div>');
    res.write(file)
    res.end();

})


server.listen(5000, 'localhost', () => {
    console.log('Server is listening on 5000')
})