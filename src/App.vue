<template>
  <div id="app">
  <div class="container">
    <div class="left">
      <img src="company_logo.png" alt="Company Logo">
      <img src="pictorial_ad.png" alt="Pictorial Ad">
      <p class = "h1" >Team Achieve</p>
      <p>Your Perfect Solution for funding your desires</p>
    </div>
    <div class="right">
      <div class="authentication">
        <h1 class= "h1">Welcome Back</h1>
        <p class="subheading">Enter your Email Address and Password to access your account</p>
        <form @submit.prevent="signIn">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
          </div>
          <button type="submit">Sign In</button>
          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
        </form>
        <p>Don't have an account? <a href="#" @click.prevent="showSignUp">Sign Up</a></p>
      </div>
    </div>
  </div>
</div>

</template>


<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
 
export default {
  data() {
    return {
      isDesktop: window.innerWidth > 768,
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
  signIn() {
  axios.post('http://localhost:3000/users/login', {
    email: this.email,
    password: this.password
  })
  .then(response => {
    // Handle successful login
    console.log(response.data);
  })
  .catch(error => {
    // Handle login error
    console.error(error);
    this.errorMessage = 'Invalid email or password. Please try again.';
  });
},
    showSignUp() {
      console.log('Show sign up form...');
    }

  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768;
    });
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1{
  color: #61227D
}
.container {
  display: flex;
  height: 100vh;
}

.left {
  flex: 1;
  background-color: ##f5f5f5; /* Background color for left section */
  padding: 20px;
}

.left img {
  max-width: 100%;
  height: auto;
}

.right {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ##f5f5f5; /* Background color for the right section */
}

.authentication {
  width: 300px;
  padding: 20px;
  background-color: #ffffff; /* Background color for authentication section */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow */
}

.authentication h1 {
  margin-top: 0;
  color: #ffffff; /* Same color as the button */
  text-align: center;
}

.authentication .subheading {
  color: #555555; /* Color for subheading */
  font-size: 14px; /* Adjust font size */
  text-align: center;
  margin-bottom: 20px; /* Add spacing */
}

.authentication form {
  margin-bottom: 20px;
}

.authentication .form-group {
  margin-bottom: 10px;
}

.authentication label {
  display: block;
}

.authentication input[type="email"],
.authentication input[type="password"] {
  width: calc(100% - 20px); /* Adjust width and account for padding */
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.authentication button {
  width: 100%;
  padding: 10px;
  background-color: #61227D;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.authentication button:hover {
  background-color: #0056b3;
}

.authentication p {
  margin: 0;
  text-align: center;
}

.authentication p a {
  color: #007bff;
  text-decoration: none;
}

.authentication p a:hover {
  text-decoration: underline;
}

</style>
