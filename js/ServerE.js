const express = require ('express');
const app = express();


app.use(express.static('/home/anton/IdeaProjects/proj_1_Flex/'))
app.use('/css',express.static('/home/anton/IdeaProjects/proj_1_Flex/css'))
app.use('/img',express.static('/home/anton/IdeaProjects/proj_1_Flex/font/image'))

app.get('/products', function (req,res){
    res.sendFile('/home/anton/IdeaProjects/proj_1_Flex/index.html');
})



const port = 3000
app.listen (port,'localhost', function (error){
    if (error) {
        console.log('Server not work  ', error)
    } else {
        console.log('Server START port' + port)
    }
})