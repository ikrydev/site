<template>
  <div class='login'>
    <div>Log In</div>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" /><br>
      <input type="password" placeholder="Password" v-model="password" /><br>
      <button @click='login' class='button'>Log in</button>
      <p class="form--separator">or</p>
      <button @click='socialLogin' class='button'>Log in with GitHub</button>
    </div>
    <p class='message'>No account? <router-link to='/signup'>Sign up here.</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'; // eslint-disable-line import/extensions
import router from '@/router.js'; // eslint-disable-line
import db from '@/firestore.js'; // eslint-disable-line
import store from '@/store.js'; // eslint-disable-line import/extensions
// import Button from '@/components/Button/Button.vue';

export default {
  name: 'Login',
  components: {
    // Button,
  },
  data() {
    return {
      email: '',
      password: '',
      successMessage: 'Log in succeeded.',
      errorMessage: 'Log in failed.',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          store.commit('setAuthorization', true);
          this.$router.push('profile');
        })
        .catch((err) => {
          this.errorMessage = err.message;
        });
    },
    socialLogin() {
      const provider = new firebase.auth.GithubAuthProvider();

      // eslint-disable-next-line no-unused-vars
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          // eslint-disable-next-line no-unused-vars
          const token = result.credential.accessToken;
          // The signed-in user info.
          // eslint-disable-next-line no-unused-vars
          const { user } = result;

          store.commit('setAuthorization', true);
          this.$router.replace('profile');
        })
        .catch((err) => {
          console.log(`Error - ${err.message}`);
        });
    },
  },
};
</script>

<style scoped>
.login {
    margin-top: 80px;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 40px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.message {
  margin: 1em 0;
  color: #b3b3b3;
}

.message a {
  color: #4CAF50;
  text-decoration: none;
}

.form--separator {
  margin: 1em 0
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

.button {
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}

button:hover,button:active,button:focus {
  background: #43A047;
}

.button {
  padding: 0 20px;
}

button:hover,button:active,button:focus {
  background: #43A047;
}
</style>
