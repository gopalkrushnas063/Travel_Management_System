let loginFunction = document.getElementById("loginForm");

const postLoginFetch = async () => {
    event.preventDefault();
    let Amobile = document.getElementById("mobile").value;
    let Apassword = document.getElementById("password").value;

    let response = await fetch(
        `http://localhost:8088/login/adminlogin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mobile: Amobile,
            password: Apassword
        })
    });
    if (response.ok) {
        loginFunction.reset();
        let res = await response.json();
        alert("Login Successfully! Please Note This UUID " + res.uuid);
        localStorage.setItem("AdminLoggedIn", true);
        window.location = "/Admin_Frontend/index.html";
    } else {
        let res = await response.json();
        alert(res.message);
    }
}

loginFunction.addEventListener("submit", postLoginFetch);
