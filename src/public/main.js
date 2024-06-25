const infoForm = document.querySelector("#infoForm");
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const address = document.querySelector("#address");
const department = document.querySelector("#department");
const cargo = document.querySelector("#cargo");
const description = document.querySelector("#description");

infoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (saveId) {
    updateUser(
      saveId,
      name.value,
      lastname.value,
      country.value,
      city.value,
      address.value,
      department.value,
      cargo.value

    );
  } else {
    saveUser(
        name.value,
        lastname.value,
        country.value,
        city.value,
        address.value,
        department.value,
        cargo.value
      );
  }

  name.value = ''
  lastname.value = ''
  country.value = ''
  city.value = ''
  address.value = ''
  department.value = ''
  cargo.value = ''

  name.focus()
});
