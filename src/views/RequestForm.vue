<template>
	<div id="request-form">
		<div id="text">
			What assistance do you require?
		</div>
		<form @submit.prevent="onFormSubmit" id="form">
			<div>
				<input type="text" id="location" placeholder="Location" v-model="request.location" ref="location">
				<img @mouseover="hover1 = true" @mouseleave="hover1 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover1">Input the location you require assistance in</span>
			<div>
				<input type="text" id="subject" placeholder="Type of Help" v-model="request.subject" ref="subject"> 
				<img @mouseover="hover2 = true" @mouseleave="hover2 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover2">Type of help you need</span>
            <div>
				<input type="text" id="subject" placeholder="Subject" v-model="request.type" ref="type"> 
				<img @mouseover="hover3 = true" @mouseleave="hover3 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover3">Post Title</span>
			<div>
				<textarea id="details" v-model="request.details" rows="10" placeholder="Tell us more about the type of help you need" ref="details"></textarea>
				<img @mouseover="hover4 = true" @mouseleave="hover4 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover4">Fill in any important details of your request</span>
            <b-button v-if="user_.loggedIn" class="contact-submit" type="submit" variant="primary">Submit</b-button>
            <b-button v-if="!user_.loggedIn" class="contact-login" variant="primary" href="/login">Log in to respond</b-button>
		</form>
	</div>
</template>

<script>
import { db } from '../firebase';
import { mapGetters } from "vuex";
export default {
  name: "RequestForm",
   data() {
    return {
		hover1: false,
		hover2: false,
        hover3: false,
        hover4: false,
        request: {
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
    created(){
        this.request.username = this.user_.username;
        this.request.userid = this.user_.uid;
        console.log(this.request)
    },
    methods:{
        onFormSubmit(event){
            event.preventDefault()
            if(this.request.text !="" && this.request.location != "" && this.request.type !="" && this.request.subject != ""){
                var collectionReference = db.collection("requests");
            
                collectionReference.add(this.request).then(()=> {
                    this.$router.push('/request-made');
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