document.getElementById('signin-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    
    const result = await response.json();
    
    if (result.success) {
        alert('Sign in successful!');
        // Redirect to a different page or update the UI
    } else {
        alert('Sign in failed: ' + result.message);
    }
});