<template>
<div>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <input
      type="email"
      placeholder="Email address..."
      v-model="email"
    />
    <input
      type="password"
      placeholder="password..."
      v-model="password"
    />
    <button type="submit">Register</button>
  </form>
</div>
</template>
<script>
// @ is an alias to /src
// import firebase from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: 'About',
  components: {
  },
  data() { 
    return { 
      email: '', 
      password: '', 
    }; 
  },
  mounted: function(){
    console.log('Wesley')
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
    },
  },
}
</script>

