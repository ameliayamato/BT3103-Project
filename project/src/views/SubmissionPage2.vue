<template>
    <div id="main">
        <div id="message">
            <span id="m1">{{message1}}</span>
            <h1 id="m2">{{message2}}</h1>
        </div>
            <CurrentRequests />
    </div>
</template>

<script>
import CurrentRequests from '../components/CurrentRequests.vue'

export default {
    name: 'submissionpage2',
    components: {
        CurrentRequests
    },
    data: function() {
        return {
            message1: 'Your offer is sucessfully submitted!',
            message2: 'You can take a look at some of the current requests for help',
        }
    }
    
}
</script>

<style>
#main {
    width: 700px;
    margin-right: auto;
    margin-left: auto;
}

#m1 {
    font-size: 45px;
}

#m2 {
    padding-top: 25px;
    font-size: 25px;
    font-weight: bold;
}

#message {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    line-height: normal;
    margin-top: 15px;
    padding-bottom: 40px;
}

</style> 
