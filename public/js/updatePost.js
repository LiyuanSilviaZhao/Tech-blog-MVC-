const createForm = document.querySelector("#create-post");
createForm.addEventListener("submit", e=>{
    e.preventDefault();
    const postObj = {
        id:createForm.getAttribute("data-postid"),
        title:document.querySelector("#post-title").value,
        content:document.querySelector("#post-content").value
    }
    console.log(postObj)
    fetch("/api/posts", {
        method:"PUT",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok) {
            location.replace('/dashboard')
        } else {
            alert('post update fail')
        }
    })
})