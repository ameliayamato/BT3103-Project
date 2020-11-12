
<template>
    <div>
        <div class="container" style="padding:10%">
            <h1>Contact Us</h1>
            <br>
            <br>
            <h4>Our site administrators will respond to your concerns via email within 5 working days</h4>
            <form action="mailto:thecharityproject@gmail.com" method="post" enctype="text/plain">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="contact.email" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="contact.reason" rows="2" placeholder="Reason for Contact"></textarea>
                </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="contact.message" rows="3" placeholder="Your message"></textarea>
                </div>
            </form>
            
            <button v-on:click.prevent="submit" class="btn btn-primary btn-lg">Contact</button>
        </div>
    </div>
</template>

<script lang="ts">
import {db} from '../firebase.js'
export default {
    data(){
        return {
            contact:{
                email:'',
                reason: '',
                message:''
            }
        }
    },
    
    methods:{
        submit : function(){
            if(this.contact.email !="" && this.contact.reason != "" && this.contact.message != ""){
                // send details to email
                db.collection('enquiries').add(this.contact);
                alert("Form submitted successfully!");
            }else{
                alert("All fields are required");
            }
        }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 10;
  height: 100%;
}

.button {
  background-color: #fec89a; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.button-area {
    background-color: #fec89a; 
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.btn {
  font-family: inherit;
  -webkit-appearance: none;
  background-color: red;
  border: none;
  border-radius: 10px;
  height: 40px;
  display: flex;
  padding: 0 35px;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: -0.00933333em;
}
.btn-primary {
  color: black;
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: right;
}
.btn-primary:hover,
.btn-primary:focus {
  color: red;
  background: linear-gradient(198.08deg, #1b984f 45.34%, #e281e7 224.21%);
}
.btn-secondary {
  color: red;
}
.btn-secondary:focus,
.btn-secondary:hover {
  color: #fec89a;
}
</style>

