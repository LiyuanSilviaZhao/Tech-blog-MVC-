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

const delCmtButtons = document.querySelectorAll(".cmt-del-btn");
delCmtButtons.forEach(delBtn=>{
    delBtn.addEventListener("click",e=>{
        const cmtId = e.target.getAttribute("data-cmtid")

        fetch(`/api/comments/${cmtId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("Error deleting a comment")
            }
        })
    })
})

const updateCmtButtons = document.querySelectorAll(".cmt-upd-btn");
updateCmtButtons.forEach(updateBtn=>{
    updateBtn.addEventListener("click",e=>{
        const cmtId = e.target.getAttribute("data-cmtid");
        const updateCmtForm = document.getElementById(`update-cmt-form-${cmtId}`);
        updateCmtForm.setAttribute('style', 'display:flex;');
    })
})

const updateCmtForms = document.querySelectorAll(".cmt-update-form");
updateCmtForms.forEach(upCmtform=>{
    upCmtform.addEventListener("submit",e=>{
        e.preventDefault();
        const cmtId = e.target.getAttribute("data-cmtid")
        const cmtObj = {
            comment: document.getElementById(`update-comment-${cmtId}`).value,
        }
        fetch(`/api/comments/${cmtId}`,{
            method:"PUT",
            body:JSON.stringify(cmtObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("Error updating a comment")
            }
        })
    })