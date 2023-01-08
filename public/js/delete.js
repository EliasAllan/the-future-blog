console.log("here to delete")
const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log("----------------------#@$#@$#%#" + id)

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
};

var deleteButtons = document .querySelectorAll('.delete-btn')
  
  for (i = 0 ; i < deleteButtons.length ; i++){
    deleteButtons[i]
    .addEventListener('click', delButtonHandler);
  }