<template>

    <div id="top-nav">

        <!-- left-aligned-links -->
        <ul class="left-aligned-links">
            <li><a href="/"><img id="logo" src="/static/logo.jpg"></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/requests">Request for help</a></li>
            <li><a href="/offers">Offers for help</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/offerform">Make an offer</a></li>
            <li><a href="/requestform">Make a request</a></li>
        </ul>

        <!-- right-aligned-links -->
        <ul v-if="!user.loggedIn" class="right-aligned-links">
            <li id="login-btn"><a href="/login">Log In</a></li>
            <li id="register-btn"><a href="/register">Register</a></li>
        </ul>

        <!-- right-aligned-links -->
        <ul v-if="user.loggedIn" class="right-aligned-links">
            <li id="login-btn"><a href="/profile">Profile</a></li>
            <li id="register-btn"><a href="/inbox">Inbox</a></li>
        </ul>
    </div>

</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: 'NavBar',
        
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        }
    }
</script>

<style>
    #top-nav {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 100;
        position: sticky;
        top: 0;
        background-color: white;
    }

    #logo {
        height: 70px;
        width: auto;
    }

    ul {
        padding-left: 10px;
    }

    ul li {
        list-style-type: none;
        display: inline-block;
        
    }

    ul li a {
        color: orange;
        margin-right: 35px;
    }

    ul li a:hover {
        text-decoration: none;
        color: orange;
    }
    

    .right-aligned-links li {
        margin-right: 35px;
        border: 1px solid orange;
        padding-top:5px;
        padding-bottom: 5px;
        padding-left: 35px;
        padding-right: 35px;
        border-radius: 0.5rem;
    }

    .right-aligned-links li a {
        margin-right: 0;
    }

    #register-btn {
        background-color:orange;
    }

    #register-btn a{
        color:white;
    }



</style>
