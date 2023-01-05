console.log("here for new comments")
const newCommentHandler = async (event) => {
    event.preventDefault();
  
const comment = document.querySelector('#comment').value.trim();

//capture the data from the form

if (comment) {
    const response = await fetch(`api/comment`, {
      method: 'POST',
      body: JSON.stringify({content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};