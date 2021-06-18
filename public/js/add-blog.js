async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_header = document.querySelector('input[name="blog_header"]').value;
    const description = document.querySelector('input[name="decription"]').value;
    
  
    
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ blog_header, description}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);