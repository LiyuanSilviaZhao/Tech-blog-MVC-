const createForm = document.querySelector("#create-cmt");
createForm.addEventListener("submit", e=>{
    e.preventDefault();
    const cmtObj = {
        comment:document.querySelector("#new-comment").value,
        postid:createForm.dataset.postid,
    }
    console.log(cmtObj)
    fetch("/api/comments", {
        method:"POST",
        body:JSON.stringify(cmtObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok) {
            location.reload()
        } else {
            alert('comment creat fail')
        }
    })
})