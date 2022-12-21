const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#loginUsername").value,
        password: document.querySelector("#loginPassword").value,
    }
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.replace('/dashboard')
        } else {
            alert("signin error")
        }
    })
})