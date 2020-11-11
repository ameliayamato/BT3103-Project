
<template id="signup-form">
  <div class="signup-wrapper">
    <div class="signup-left">
      <img height="100" src="https://i.imgur.com/0MW0AFG.jpg" srcr="https://i.imgur.com/0MW0AFG.jpg">
    </div>
    <form class="signup-right" @submit.prevent="onFormSubmit">
      <div class="h2">Sign up now</div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <div class="form-group">
        <input type="text" id="Username" placeholder="Enter a username" v-model="user.username">
      </div>
      <div class="form-group">
        <input type="text" id="Email" placeholder="Enter your email" v-model="user.email">
      </div>
      <div class="form-group">
        <input type="password" id="Password" placeholder="Enter a password" v-model="user.password">
      </div>

      <div class="button-area">
        <button class="btn btn-primary pull-right" type="submit" >Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: "SignupForm",
  template: "#signup-form",
  data() {
    return {
      error: null,
      user: {
        username: "",
        email: "",
        password: "",
        inbox: [],
        contact_number: "",
        help_count: 0,
        request_count: 0
      } 
    };
  },
  beforeMount() {
    let init = 100;
    setTimeout(function() {
      document.querySelector(".signup-wrapper").classList.toggle("open");
      init = 300;
    }, init);
  },
  methods:{
    async onFormSubmit(event){
        event.preventDefault()
        if(this.user.username =="" && this.user.email =="" && this.user.password ==""){
            alert("At least one field is required");
        }else{
          var collectionReference = db.collection("users");
          var query = collectionReference.where("username", "==", this.user.username);
          if ((await query.get()).empty) {
            var query2 = collectionReference.where("email", "==", this.user.email);
            if ((await query2.get()).empty){
              collectionReference.add(this.user).then((docRef) => {
                var newUser = {
                  username: this.user.username,
                  uid: docRef.id
                }

                // login user
                this.$store.dispatch("login", newUser);

                // redirect
                this.$router.push('/')
              });
            } else {
              this.error = "Email exist";
            }
          } else {
            this.error = "Username exist";
          }
        }
    }
  }
}

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
.signup-wrapper {
  width: 1440px;
  height: 600px;
  background-color: #fff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.signup-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}
.signup-left img {
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}
.open .signup-left img {
  -webkit-transform: translateX(210px) translateZ(0);
  transform: translateX(210px) translateZ(0);
}
.open .signup-left {
  -webkit-transform: translateX(-400px) translateZ(0);
  transform: translateX(-400px) translateZ(0);
}
.signup-right {
  padding: 30px;
  position: absolute;
  top: 100px;
  right: 0;
  width: 500px;
  -webkit-transform: translateX(400px) translateZ(0);
  transform: translateX(400px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}
.open .signup-right {
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

.button-area {
  background-color: white;
}
</style>

