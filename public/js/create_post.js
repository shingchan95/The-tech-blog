const newFormHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.parentElement)
  const title = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};



document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

