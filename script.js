const loadComments =() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => displayComments(comments.slice(0,20)))

}

const displayComments=(comments)=>{

const commentContainer = document.getElementById("comment-container");  

comments.forEach(element => {

const commentBox = document.createElement('div')
commentBox.classList.add("comment","col-md-4")   
  
commentBox.innerHTML=`
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6 class="card-title">${element.email}</h6>
    <p class="card-text">${element.body}</p>
    <button onclick= loadPosts(${element.postId}) class="btn btn-primary">Get Post</button>
  </div>
</div>

`;
commentContainer.appendChild(commentBox);
})
}

let loadPosts = (postId)=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => displayPosts(data))
}
let displayPosts = (post)=>{
    
    
const postContainer = document.getElementById("post-container");  
  
  console.log(post);
postContainer.innerHTML=`
<div class="card w-25 d-block m-auto">
  <div class="card-body">
  <h3 >${post.id}</h3>
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body}</p>
  </div>
</div>

`;

}
loadComments();