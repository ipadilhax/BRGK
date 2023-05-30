function login() {
    let email = document.getElementById("exampleInputEmail1").value;
    let error = document.getElementById("error");
    let senha = document.getElementById("exampleInputPassword1").value;
    if (email == "admin@brgk.com" && senha == "12345brgk") {
        window.location.href = "restrito.html";
    }
    else {
        error.classList.add("active")
    }
}
