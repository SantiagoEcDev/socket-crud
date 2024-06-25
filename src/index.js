import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

let users = [];
const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.emit('server:loadusers', users)

  socket.on("client:newuser", (newUser) => {
    const user = { ...newUser, id: uuid()};
    users.push(user)
    io.emit('server:newuser', user)
  });

  socket.on('client:deleteuser', (userId)=>{
    users = users.filter(user => user.id !== userId)
    io.emit("server:loadusers", users)
  })

  socket.on('client:getuser', userId => {
    const user = users.find(user => user.id === userId)
    socket.emit('server:selecteduser', user)
  })

  socket.on('client:updateuser', updatedUser => {
    users = users.map(user => {
      if(user.id === updatedUser.id){
        user.name= updatedUser.name
        user.lastname = updatedUser.lastname
        user.country = updatedUser.country
        user.city = updatedUser.city
        user.address = updatedUser.address
        user.department = updatedUser.department
        user.cargo = updatedUser.cargo
      }
    addButton = 'Actualizar'

      return user
    })
    io.emit('server:loadusers', users)
  })
});

server.listen(3000);
console.log("Server on port ", 3000);
