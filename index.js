// console.clear();

function GetId() {
    let id = 0;
    return () => ++id;
}

const getId = new GetId();
const isEmpty = (str) => str.trim() === "";

let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputEmail = document.querySelector("#inputEmail");
let inputTelefono = document.querySelector("#inputTelefono");
let inputCiudad = document.querySelector("#inputCiudad");
let tablaUsuarios = document.querySelector("#tablaUsuarios");
let btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreVal = inputNombre.value;
    let apellidoVal = inputApellido.value;
    let emailVal = inputEmail.value;
    let telefonoVal = inputTelefono.value;
    let ciudadVal = inputCiudad.value;

    if (isEmpty(nombreVal)) {
        inputNombre.focus();
        console.log(isEmpty(nombreVal));
        return;
    } else if (isEmpty(apellidoVal)) {
        inputApellido.focus();
        return;
    } else if (isEmpty(emailVal)) {
        inputEmail.focus();
        return;
    } else if (isEmpty(telefonoVal)) {
        inputTelefono.focus();
        return;
    } else if (isEmpty(ciudadVal)) {
        inputCiudad.focus();
        return;
    }

    let id = getId()
    let fila = `<tr data-id="${id}">
                    <th scope="row">${id}</th>
                    <td>${nombreVal}</td>
                    <td>${apellidoVal}</td>
                    <td>${emailVal}</td>
                    <td>${telefonoVal}</td>
                    <td>${ciudadVal}</td>
                    <td><button class='btn btn-danger btnEliminar'>Eliminar</button></td>
                </tr>`;

    tablaUsuarios.insertAdjacentHTML("beforeend", fila);

    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
    inputCiudad.value = "";

    inputNombre.focus();
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
        e.target.parentElement.parentElement.remove();
    }
});
