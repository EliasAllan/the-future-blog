console.log("here to delete")
const delButtonHandler = async (event) => {
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

document
  .querySelector('#delete-btn')
  .addEventListener('click', delButtonHandler);