
<template>
    <div class="contactpage">
        <h3 id="title">Contact helpfulman99 - I have free food and new clothes</h3>
        <p class="post-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
        <b-form @submit="onSubmit" class="contact-form">
            <p class="form-label">Name (optional)</p>
            <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
            <p class="form-label">Contact Number (optional)</p>
            <b-form-input v-model="mobile" placeholder="Enter your contact number"></b-form-input>
            <p class="form-label">Email</p>
            <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
            <p class="form-label">Message</p>                       
            <b-form-textarea
            id="message"
            v-model="message"
            placeholder="Enter something..."
            rows="5"
            max-rows="8"
            size="lg"
            ></b-form-textarea>

            <b-button class="contact-submit" type="submit" variant="primary">Submit</b-button>
        </b-form>


    </div>
</template>

<script >
export default {
    name: 'SendContactOfferPage',
    props:['id'],
    data(){
        return {
            contact:{
                name: '',
                mobile: '',
                email: '',
                message: ''
            }
        }
    },
    
    methods:{
        submit(){
            if(this.contact.eamil !="" && this.contact.message != ""){
                // send details to email
            }else{
                alert("All fields are required");
            }
        }
    }
}
</script>

<style>
.contactpage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contact-submit {
    margin:10px;
    width: 150px;
    display: flex;
    justify-content: center;

}

.post-title{
    margin-top: 10px;
    font-size: 20px;
}

.post-details {
    width: 50%;
    color: grey;
    padding: 10px;
}

.contact-form {
    width:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-label {
    margin-top: 10px;
    font-size: 17px;
}


</style>

