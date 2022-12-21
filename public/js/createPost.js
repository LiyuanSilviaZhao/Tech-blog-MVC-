const createForm = document.querySelector("#create-post");
createForm.addEventListener("submit", e => {
    e.preventDefault();
    const postObj = {
        title: document.querySelector("#post-title").value,
        content: document.querySelector("#post-content").value
    }
    fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.replace('/dashboard')
        } else {
            alert('post create failed')
        }
    })
})