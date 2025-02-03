document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        'blogPosts/post1.html',
        'blogPosts/post2.html'
        // Add more blog post files as needed
    ];

    const blogContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        fetch(post)
            .then(response => response.text())
            .then(data => {
                const postElement = document.createElement('div');
                postElement.innerHTML = data;
                blogContainer.appendChild(postElement);
            })
            .catch(error => console.error('Error loading blog post:', error));
    });
});