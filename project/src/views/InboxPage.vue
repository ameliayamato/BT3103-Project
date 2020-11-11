<template>
    <div class="inboxpage">
        <h4 id="title">Inbox</h4>
        <div class="message-container">
            <p class="message-title">HAPPYMAN replied to your OFFER - I HAVE FOOD</p>
            <p class="message-date">Date: 10/11/20</p>
            <p class="message-email">Email: <a href="mailto:webmaster@example.com">webmaster@example.com</a></p>
            <p class="message-contact">Contact: 83459684</p>
            <p class="message-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InboxPage',
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
