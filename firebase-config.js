<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4LgLibQd4Suh-L4FW3XocdYx6cAWGabQ",
    authDomain: "araujo-s-beekeeping-website.firebaseapp.com",
    projectId: "araujo-s-beekeeping-website",
    storageBucket: "araujo-s-beekeeping-website.firebasestorage.app",
    messagingSenderId: "779250196520",
    appId: "1:779250196520:web:d1430a6a347b105061951d",
    measurementId: "G-Z0BYVP5Q04"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>