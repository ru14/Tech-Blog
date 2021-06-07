async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="blog_header"]').value;
    const description = document.querySelector('input[name="deccription"]').value;
    
  
    
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ title, description, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);