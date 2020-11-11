<template>
	<div id="offer-form">
		<div id="text">
			What are you offering?
		</div>
		<form @submit.prevent="onFormSubmit" id="form">
			<div>
				<input type="text" id="location" placeholder="Location" v-model="offer.location" ref="location">
				<img @mouseover="hover1 = true" @mouseleave="hover1 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover1">Input the location you can provide help in</span>
			<div>
				<input type="text" id="subject" placeholder="Type of Help" v-model="offer.type" ref="type"> 
				<img @mouseover="hover2 = true" @mouseleave="hover2 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover2">Type of help you can provide</span>
            <div>
				<input type="text" id="subject" placeholder="Subject" v-model="offer.subject" ref="subject"> 
				<img @mouseover="hover3 = true" @mouseleave="hover3 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover3">Post Title</span>
			<div>
				<textarea id="details" v-model="offer.details" rows="10" placeholder="Tell us more about the type of offer" ref="details"></textarea>
				<img @mouseover="hover4 = true" @mouseleave="hover4 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover4">Fill in any important details of your offer</span>
            <b-button v-if="user_.loggedIn" class="contact-submit" type="submit" variant="primary">Submit</b-button>
            <b-button v-if="!user_.loggedIn" class="contact-login" variant="primary" href="/login">Log in to respond</b-button>
		</form>
	</div>
</template>

<script>
import { db } from '../firebase';
import { mapGetters } from "vuex";
export default {
  name: "OfferForm",
    data() {
    return {
		hover1: false,
		hover2: false,
        hover3: false,
        hover4: false,
        offer: {
            location: "",
            type: "",
            subject: "",
            details: "",
            profilepic: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
            reports: [],
            username: null,
            userid: null
        }
    }
  },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user_: "user"
        })
    },
  methods:{
        onFormSubmit(event){
            event.preventDefault()
            if(this.offer.text !="" && this.offer.location != "" && this.offer.type !="" && this.offer.subject != ""){
                var collectionReference = db.collection("offers");
                this.offer.username = this.user_.username;
                this.offer.userid = this.user_.uid;

                collectionReference.add(this.offer).then(()=>{
                    this.$router.push('/offer-made');

                });
            }
        }
    }
}
</script>

<style scoped>
    #text {
		text-align: center;
		font-size: 30px;
		padding-top:50px;
	}
	#form {
		display: flex;
		flex-direction: column;
		margin: 10px;
		align-items: center;
	}
	#location {
		margin: 10px;
		width: 450px;
		text-align: center;
	}
	#subject {
		margin: 10px;
		width: 450px;
		text-align: center;
	}
	#details {
		margin: 10px;
		width: 450px;
		text-align: center;
	}
	#submit {
		margin: 10px;
		width: 10%;
		height: 40px;
		border-radius: 6px;
		background-color: orange;
		color: white;
		border-color: white;
	}
	#information {
		height: 20px;
	}
</style>