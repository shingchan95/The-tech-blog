const newComment = async (event) => {
  const postid= event.target.id
  const all_comment = document.querySelectorAll('#project-comment')
  const comment_index= postid-1 
  const comment= all_comment[comment_index].value.trim();

  
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
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

const commentBtn= document.getElementsByClassName('new-comment-form')
for(i=0; i<commentBtn.length; i++){
  commentBtn[i].addEventListener('submit', newComment)
}
 
//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };