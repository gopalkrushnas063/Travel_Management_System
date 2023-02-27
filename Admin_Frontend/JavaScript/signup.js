


let signup = document.getElementById("signupForm");

const postSignupFetch = async () => {
    event.preventDefault();
    let uName = document.getElementById("name").value;
    let uMobile = document.getElementById("mobile").value;
    let uEmail = document.getElementById("email").value;
    let uPassword = document.getElementById("password").value;

    let response = await fetch(
        `http://localhost:8088/login/registerAdmin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },

        body: JSON.stringify({
            adminName: uName,
            email: uEmail,
            mobile: uMobile,
            password: uPassword
        })
    })

    if (response.ok) {
        signup.reset();
        alert("Admin Saved Successfully!");
        window.location = "/Admin_Frontend/logout_index.html";
    } else {
        let res = await response.JSON();
        alert(res.message);
    }
}

signup.addEventListener("submit", postSignupFetch);