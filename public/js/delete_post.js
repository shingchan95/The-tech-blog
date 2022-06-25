
  
  const delButtonHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.id)
   // if (event.target.hasAttribute('data-id')) 
   console.log()
    const id = event.target.id;

      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
    
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    };
    
    
    const deleteBtn= document.getElementsByClassName('btn-delete')
    for(i=0; i<deleteBtn.length; i++){
      deleteBtn[i].addEventListener('click', delButtonHandler)
    }