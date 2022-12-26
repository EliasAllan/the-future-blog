console.log("here for new posts")

//capture the data from the form

fetch("/api/posts",{
    method: "POST",
    body: JSON.stringify({
        title: "Test Title with Allan pt3",
        content: "part 10000",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }}).then(response => {
        console.log(response)
        if(response.ok){
            return response.json()
        }

    }).then(data=>{
        console.log(data)
        document.location.replace(`/posts/${data.id}`)
    })