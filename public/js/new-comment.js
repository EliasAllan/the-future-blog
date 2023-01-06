console.log("here for new comments")
console.log(window.location.pathname.split("/")[2])

const newCommentHandler = async (event) => {
    event.preventDefault();
  
const comment = document.querySelector('#comment').value.trim();

//capture the data from the form

if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        comment_content: comment,
        post_id: window.location.pathname.split("/")[2]}),
        headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

var form = document.querySelector("#submit-comment") ? document.querySelector("#submit-comment") : null 

if(form){
  form.addEventListener('click', newCommentHandler);
}