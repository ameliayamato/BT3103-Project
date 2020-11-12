
<template id="login-form">
  <div class="login-wrapper">
    <div class="login-left">
      <img height="100" src="https://i.imgur.com/0MW0AFG.jpg" srcr="https://i.imgur.com/0MW0AFG.jpg">
    </div>
    <form class="login-right" @submit.prevent="onFormSubmit">
      <div class="h2">Login</div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>

      <div class="form-group">
        <input type="text" id="Email" placeholder="Email" v-model="email">
        <label for="Email">Email Address</label>    
      </div>
      <div class="form-group">
        <input type="password" id="Password" placeholder="Password" v-model="password">
        <label for="Password">Password</label>    
      </div>
      <div class="checkbox-container">
        <input type="checkbox" v-model="rememberMe">
        <div class="text-checkbox">Remember me</div>
      </div> 
      <div class="button-area">
        <button class="btn btn-primary pull-right" type="submit" >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: "LoginForm",
  template: "#login-form",
  data() {
    return {
      error: null,
      rememberMe: false,
      email: "",
      password: ""
    };
  },
  beforeMount() {
    let init = 100;
    setTimeout(function() {
      document.querySelector(".login-wrapper").classList.toggle("open");
      init = 300;
    }, init);
  },
  methods: {
    isRememberMe() {
      return this.rememberMe === true;
    },
    async onFormSubmit(event){
        event.preventDefault()
        if(this.email =="" || this.password ==""){
            alert("FIll in all fields");
        }else{
          var user = null;
          let dbRef = db.collection('users').where("email", "==", this.email).where("password", "==", this.password);
          dbRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              user = doc.data()
              user.id = doc.id;
            });
            if (user){
              console.log(user)
              // login user
              this.$store.dispatch("login", user);
              // redirect
              this.$router.push('/')
            } else {
              this.error = "Incorrect Email or Password";
            }

            
          }).catch((error) => {
            console.log(error)
              this.error = error;
          })

        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to just this component -->
<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#sandbox {
  font-family: "Lato", sans-serif;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(243.87deg, #22bf64 30.6%, #371933 130.6%);
  overflow: hidden;
}
input {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  font-size: 20px;
  color: #000;
  border-radius: 10;
  border-botton: 0;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #aaaaaa;
}
button,
input:focus {
  outline: 1;
}
::-webkit-input-placeholder {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.00933333em;
}
.form-group {
  position: relative;
  padding-top: 20px;
  margin-top: 10px;
}
label {
  position: absolute;
  top: 0;
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  color: #aaa;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: -0.00933333em;
  transition: all 0.5s ease-out;
}
input:placeholder-shown + label {
  opacity: 0;
}
.h1 {
  color: red;
  opacity: 0.8;
  font-size: 50px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  text-align: center;
  cursor: pointer;
  position: absolute;
  transform: translateY(-10px);
}
.open .h1 {
  -webkit-transform: translateX(200px) translateZ(0) translateY(-10px);
  transform: translateX(200px) translateZ(0) translateY(-10px);
}
.h2 {
  color: #000;
  font-size: 45px;
  letter-spacing: -0.00933333em;
  font-weight: 600;
  padding-bottom: 15px;
}
.login-wrapper {
  width: 1440px;
  height: 600px;
  background-color: #fff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.login-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}
.login-left img {
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}
.open .login-left img {
  -webkit-transform: translateX(210px) translateZ(0);
  transform: translateX(210px) translateZ(0);
}
.open .login-left {
  -webkit-transform: translateX(-400px) translateZ(0);
  transform: translateX(-400px) translateZ(0);
}
.login-right {
  padding: 30px;
  position: absolute;
  top: 100px;
  right: 0;
  width: 500px;
  -webkit-transform: translateX(400px) translateZ(0);
  transform: translateX(400px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}
.open .login-right {
  -webkit-transform: translateX(0px) translateZ(0);
  transform: translateX(0px) translateZ(0);
}

.checkbox-container {
  display: flex;
  margin-top: 35px;
}

.text-checkbox {
  color: #aaa;
  font-size: 16px;
  letter-spacing: -0.00933333em;
  font-weight: 300;
  margin-left: 15px;
}

input[type="checkbox"] {
  cursor: pointer;
  margin: 0;
  height: 30px;
  position: relative;
  width: 22px;
  -webkit-appearance: none;
  transition: all 180ms linear;
}

input[type="checkbox"]:before {
  border: 1px solid #aaa;
  background-color: #fff;
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 2px;
  transition: all 180ms linear;
}
input[type="checkbox"]:checked:before {
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
  border: 5px solid #22bf64;
}
input[type="checkbox"]:after {
  content: "";
  border: 2px solid #fff;
  border-right: 0;
  border-top: 0;
  display: block;
  height: 4px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 12px;
  transition: all 180ms linear;
}
input[type="checkbox"]:checked:after {
  opacity: 1;
}
.button-area {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.btn {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: red;
  border: none;
  border-radius: 10px;
  height: 40px;
  display: flex;
  padding: 0 35px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.00933333em;
}
.btn-primary {
  color: #fff;
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: right;
}
.btn-primary:hover,
.btn-primary:focus {
  color: #fff;
  background: linear-gradient(198.08deg, #1b984f 45.34%, #e281e7 224.21%);
}
.btn-secondary {
  color: red;
}
.btn-secondary:focus,
.btn-secondary:hover {
  color: #1b984f;
}
</style>

