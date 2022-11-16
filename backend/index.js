const express = require('express')
const http = require('http')
const socketio = require('socket.io');
const { addUser, removeUser, getUser } = require('./entity/entity');

const app = express();
const server = http.createServer(app);
const io = socketio(server,{cors:{origin:"*"}});

app.get('/',(req,res)=>{
    res.status(200).send("Server Running Successfully")
})

io.on('connect',(socket)=>{
    console.log("Socket Connected");

    socket.on('join',({name,room},callBack)=>{
        console.log(name,room,'Firstttttt');
        const {user , error } = addUser({id:socket.id,name:name,room:room})

        if(error) {
            callBack(error)
            return;
        }

        socket.join(user.room);

        socket.emit('msg',{user:'admin',text:`Welcome ${user.name}`})
        socket.broadcast.to(user.room).emit('msg',{user:'admin',text:`${user.name} has Joined`})
    })

    socket.on('sendMsg',(message,callBack)=>{
        const user = getUser(socket.id)
        if(user) {
        io.to(user.room).emit('msg',{user:user.name, text:message});
    } 
    callBack()
    })


    socket.on('disconnect',()=>{
        console.log('User Disconnected');
        const user  = removeUser(socket.id)

        if(user) {
            io.to(user.room).emit('msg',{user:'admin',text:`${user.name} has Left`})
        }
    })
})

server.listen(8000,()=>{
    console.log("Server Running 8000");
})