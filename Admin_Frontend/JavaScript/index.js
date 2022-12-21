let logoutFun = async () => {
    let uuid = prompt("Enter Session UUID");
    if (uuid.length > 0) {
        let response = await fetch(`http://localhost:8081/login/adminlogout?key=${uuid}`, {
            method: 'PATCH'
        }).catch(err => {
            console.log(err);
        })
        if (response.ok) {
            alert("Logged Out Successfully!");
            localStorage.setItem("AdminLoggedIn", false);
            window.location = "/Admin_Frontend/login_index.html";
        } else {
            let res = await response.json();
            alert(res.message);
        }
    } else {
        alert("Please Enter UUID!");
    }
}