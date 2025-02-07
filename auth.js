// auth.js

// Handle Sign-in
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User:', user);
            alert('Sign-in successful!');
            // Redirect to blog page
            window.location.href = 'blog.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessageText = error.message;
            console.error('Error:', errorCode, errorMessageText);
            errorMessage.textContent = `Error: ${errorMessageText}`;
        });
});

// Check if user is logged in
firebase.auth().onAuthStateChanged((user) => {
    const signInButton = document.querySelector('.sign-in-btn');
    if (user) {
        signInButton.textContent = 'Sign Out';
        signInButton.addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
                window.location.href = 'index.html';
            });
        });
    } else {
        signInButton.textContent = 'Sign In';
        signInButton.href = 'signIn.html';
    }
});


function sanitizeInput(input) {
    const tempElement = document.createElement('div');
    tempElement.textContent = input;
    return tempElement.innerHTML;
}