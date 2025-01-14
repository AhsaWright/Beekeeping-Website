// auth.js

// Handle Signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('User:', user);
            alert('Signup successful!');
            // Redirect to sign-in page
            window.location.href = 'signin.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
});

// Handle Sign-in
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User:', user);
            alert('Sign-in successful!');
            // Optionally, you can redirect the user to another page
            // window.location.href = 'welcome.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
});