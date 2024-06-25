const socket = io();

const saveUser = (name, lastname, country, city, address, department, cargo) => {
  socket.emit("client:newuser", {
    name,
    lastname,
    country,
    city,
    address,
    department,
    cargo
  });
};

const deleteUser = id => {
    socket.emit('client:deleteuser', id);
}

const getUser = id =>{
    socket.emit('client:getuser', id)
}

const updateUser = (id, name, lastname, country, city, address, department,cargo) => {
    socket.emit('client:updateuser',{
      id,
      name,
      lastname,
      country,
      city,
      address,
      department,
      cargo
    })

}

socket.on("server:newuser", appendUser);

socket.on('server:loadusers',  renderUsers);

socket.on('server:selecteduser', user => {
    const name = document.querySelector("#name")
    const lastname = document.querySelector("#lastname")
    const country = document.querySelector("#country")
    const city = document.querySelector("#city")
    const address = document.querySelector("#address")
    const department = document.querySelector("#department")
    const cargo = document.querySelector("#cargo")

    name.value = user.name
    lastname.value = user.lastname
    country.value = user.country
    city.value = user.city
    address.value = user.address
    department.value = user.department
    cargo.value = user.cargo

    saveId = user.id

})
