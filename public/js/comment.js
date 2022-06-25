
const newComment = async (event) => {
  const postid= event.target.id
  const comment = document.querySelector('#project-comment').value.trim();


  
  if (comment) {
    event.preventDefault();
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment: comment, post_id: postid }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace(`/post/${postid}`);
    } else {
      alert('Failed to create post');
    }
  }
};

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);

