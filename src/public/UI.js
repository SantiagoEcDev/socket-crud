const usersList = document.querySelector("#users");

let saveId = "";

const userUi = (user) => {
  const div = document.createElement("div");

  div.innerHTML += `
    <div class="card card-body rounded-0 mb-2">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">Cargo: ${user.cargo}</h1>
            <div>
                <button class="btn btn-danger delete" data-id="${user.id}"><i class="fa-solid fa-trash"></i></button>
                <button class="btn btn-primary update" data-id="${user.id}"><i class="fa-solid fa-user-pen"></i></button>

            </div>
        </div>
        <p><b>Nombre:</b> ${user.name}</p>
        <p><b> Apellido:</b> ${user.lastname}</p>
        <p><b>País:</b> ${user.country}</p>
        <p><b>Ciudad:</b> ${user.city}</p>
        <p><b>Dirección:</b> ${user.address}</p>
        <p><b>Departamento:</b> ${user.department}</p>
    </div>
    `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");
  const addButton = document.querySelector("#addButton");

  btnDelete.addEventListener("click", () => {
    console.log(btnDelete.dataset.id);
    deleteUser(btnDelete.dataset.id);
  });

  btnUpdate.addEventListener("click", () => {
    addButton.innerHTML = "Actualizar"
    getUser(btnUpdate.dataset.id);
  });

  return div;
};

const renderUsers = (users) => {
  usersList.innerHTML = "";
  users.forEach((user) => {
    usersList.append(userUi(user));
  });
};

const appendUser = (user) => {
  usersList.append(userUi(user));
};
