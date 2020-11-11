<template>
    <div class="inboxpage">
        <h4 id="title">Inbox</h4>
        <div v-for="item in user.inbox" v-bind:key="item.post_title" class="message-container">
            <p class="message-title">{{item.from_username}} replied to your post - {{item.post_title}}</p>
            <p class="message-email">Email: <a :href="item.email">{{item.email}}</a></p>
            <p class="message-contact">Contact: {{item.contact_number}}</p>
            <p class="message-details">{{item.message}}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { db } from '../firebase';

    export default {
        name: 'InboxPage',
        data(){
            return ({
                user: {}
            })
        },
        computed: {
            // map `this.username` to `this.$store.getters.user`
            ...mapGetters({
                user_: "user"
            }),
        },
        created() {
            console.log(this.user_.uid)
            let dbRef = db.collection('users').doc(this.user_.uid);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })

            console.log(this.user)
        },
    }

</script>

<style>

.inboxpage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.message-container {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 10px;
    border-style: solid;
    border-width: 0.5px;
    padding: 10px;
}

.message-title {
    font-weight: bold;
}

.message-details {
    color: grey;
}

</style>
