
<template>
    <div class="contactpage">
        <h3 id="title">Contact {{offer.username}} - {{offer.subject}}</h3>
        <p class="post-details">{{offer.details}}</p>
        <b-form @submit.prevent="onFormSubmit" class="contact-form">
            <p class="form-label">Name (optional)</p>
            <b-form-input v-model="user.name" placeholder="Enter your name"></b-form-input>
            <p class="form-label">Contact Number (optional)</p>
            <b-form-input v-model="user.contact" placeholder="Enter your contact number"></b-form-input>
            <p class="form-label">Email</p>
            <b-form-input v-model="user.email" placeholder="Enter your email"></b-form-input>
            <p class="form-label">Message</p>                       
            <b-form-textarea
            id="message"
            v-model="message"
            placeholder="Enter something..."
            rows="5"
            max-rows="8"
            size="lg"
            ></b-form-textarea>

            <b-button v-if="user_.loggedIn" class="contact-submit" type="submit" variant="primary">Submit</b-button>
            <b-button v-if="!user_.loggedIn" class="contact-login" variant="primary" href="/login">Log in to respond</b-button>

        </b-form>


    </div>
</template>

<script >
import { db } from '../firebase';
import { mapGetters } from "vuex";
import firebase from "firebase/app"; 
import "firebase/firestore"; 

export default {
    name: 'SendContactOfferPage',
    props:['id'],
    data(){
        return {
            offer: {},
            user: {},
            message: ''
        }
    },
    computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user_: "user"
            })
    },
    created() {
        let dbRef = db.collection('offers').doc(this.$route.params.id);
        dbRef.get().then((doc) => {
            this.offer = doc.data();
        }).catch((error) => {
            console.log(error)
        })

        if(this.user_.loggedIn){
            let userRef = db.collection('users').doc(this.user_.uid);
            userRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        }

    },
    methods:{
        async onFormSubmit(event){
            event.preventDefault()
            if(this.user.mobile =="" && this.user.email ==""){
                alert("At least one contact field is required");
            }else{
                var newRequestCount = this.user.request_count + 1;
                // increase help points for contactor
                db.collection('users').doc(this.user_.uid)
                .update({ request_count: newRequestCount}).then(() => {
                    console.log("User successfully updated!");

                    var newMessage = {
                            contact_number: this.user.mobile ? this.user.mobile : "",
                            email: this.user.email ? this.user.email : "",
                            from_username: this.user.username,
                            from_name: this.user.name ? this.user.name : "",
                            message: this.message ? this.message : "",
                            post_title: this.offer.subject ? this.offer.subject : ""
                        }

                    // send message to user
                    db.collection('users').doc(this.offer.userid)
                    .update({
                        inbox: firebase.firestore.FieldValue.arrayUnion(newMessage)
                    }).then(()=> {
                        this.$router.push('/contact-success');
                    });

                }).catch((error) => {
                    console.log(error);
                });


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

