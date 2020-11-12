<template>
    <div class="profilepage">
        <h3 id="title">Details</h3>
        <form @submit.prevent="onFormSubmit">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <div v-if="update" class="alert alert-success">{{update}}</div>
            <div class="form-group">
                <input type="text" id="Cheryl" placeholder="Enter your name" v-model="user.name">
            </div>
            <div class="form-group">
                <input type="text" id="Username" placeholder="Enter a username" v-model="user.username">
            </div>
            <div class="form-group">
                <input type="text" id="Email" placeholder="Enter your email" v-model="user.email">
            </div>
            <div class="form-group">
                <input type="text" id="Contact" placeholder="Enter your contact" v-model="user.contact">
            </div>
            

            <div class="button-area">
                <button class="btn btn-primary pull-right" type="submit" >Update</button>
            </div>
        </form>

        <button class="logout btn btn-primary pull-right" @click="logout" >Logout</button>
    </div>
    
</template>
<script>
import { db } from '../firebase';
import { mapGetters } from "vuex";

export default {
    name: "ProfilePage",
    data() {
        return {
            update: null,
            error: null,
            user: { }
        }
    },
    computed: {
        // map `this.username` to `this.$store.getters.user`
        ...mapGetters({
            user_: "user"
        })
    },
    created() {
        console.log(this.user_.uid)
        let dbRef = db.collection('users').doc(this.user_.uid);
        dbRef.get().then((doc) => {
            this.user = doc.data();
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        onFormSubmit(event){
            event.preventDefault()
            if(this.user.username =="" || this.user.email ==""){
                alert("All fields are required");
            }else{
                // update db
                db.collection('users').doc(this.user_.uid)
                .update(this.user).then(() => {
                    console.log("User successfully updated!");
                    this.update = "Updated";
                }).catch((error) => {
                    console.log(error);
                });
                
            }
        },
        logout: function(){
            // logout user
            this.$store.dispatch("logout", this.user_.uid);

            // redirect
            this.$router.push('/')
        }
    }
}
</script>
<style>
.profilepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logout {
    margin-top: 30px;
}

</style>