console.log("here for new posts")
const newPostHandler = async (event) => {
    event.preventDefault();
  
const title = document.querySelector('#title').value.trim();
const content = document.querySelector('#content').value.trim();
//capture the data from the form

if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title ,
        content
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#post-form')
  .addEventListener('submit', newPostHandler);

// const response = await fetch('/api/posts', {
//     method: 'POST',
//     body:JSON.stringify({ title, content}),
//     headers: { 'Content-Type': 'application/json' },
// });

// fetch("/api/posts",{
//     method: "POST",
//     body: JSON.stringify({
//         title: title,
//         content: content,
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }}).then(response => {
//         console.log(response)
//         if(response.ok){
//             return response.json()
//         }

//     })
//     .then(data=>{
//         console.log(data)
//         // document.location.replace(`/posts/${data.id}`)
//     })

