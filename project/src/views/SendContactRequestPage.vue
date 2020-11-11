
<template>
    <div class="contactpage">
        <h3 id="title">Contact {{request.username}} - {{request.subject}}</h3>
        <p class="post-details">{{request.details}}</p>
        <b-form @submit.prevent="onFormSubmit" class="contact-form">
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
import { db } from '../firebase';

export default {
    name: 'SendContactRequestPage',
    props:['id'],
    data(){
        return {
            request: {},
            message:{
                name: '',
                mobile: '',
                email: '',
                message: ''
            }
        }
    },
    created() {
        let dbRef = db.collection('requests').doc(this.$route.params.id);
        dbRef.get().then((doc) => {
            this.request = doc.data();
        }).catch((error) => {
            console.log(error)
        })

    },
    
    methods:{
        onFormSubmit(event){
            event.preventDefault()
            if(this.message.mobile =="" && this.message.email ==""){
                alert("At least one contact field is required");
            }else{
                console.log("hi");
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

