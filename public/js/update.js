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

const delBtn = document.querySelector("#delbtn");
delBtn.addEventListener("click", e=>{
    const postId = e.target.getAttribute("data-postid")
        console.log(postId);
        fetch(`/api/posts/${postId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.replace('/dashboard')
            } else {
                alert("trumpet sound")
            }
        })
})