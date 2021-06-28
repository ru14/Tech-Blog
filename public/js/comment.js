async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
    let blog_id = document.querySelector('#comment-form').getAttribute('data-blog');
    console.log(blog_id)
    blog_id = parseInt(blog_id)
    
    console.log(comment_text)
    
  
    
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}
  
    document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);