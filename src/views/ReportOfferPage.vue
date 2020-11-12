<template>
    <div class="reportpage">
        <h3 id="title">Report Post</h3>
        <p class="report-post-title">Title: {{offer.subject}}</p>
        <b-form @submit.prevent="onFormSubmit" class="report-form">
            <b-form-textarea
            id="report-textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="5"
            max-rows="8"
            size="lg"
            ></b-form-textarea>

            <b-button class="report-submit" type="submit" variant="primary">Submit</b-button>
        </b-form>


    </div>
</template>

<script >
import { db } from '../firebase';

export default {
    name: 'ReportPage',
    props:['id'],
    data(){
        return {
            text: "",
            offer: {}

        }
    },
    created() {
        let dbRef = db.collection('offers').doc(this.$route.params.id);
        dbRef.get().then((doc) => {
            this.offer = doc.data();
        }).catch((error) => {
            console.log(error)
        })
    },
    methods:{
        onFormSubmit(event){
            event.preventDefault()
            if(this.text !=""){
                // append report to report array
                this.offer.reports.push(this.text);
                
                // update db
                db.collection('offers').doc(this.$route.params.id)
                .update(this.offer).then(() => {
                    console.log("Offer successfully updated!");
                    this.$router.push('/report-success')
                }).catch((error) => {
                    console.log(error);
                });
            }else{
                alert("All fields are required");
            }
        }
    }
}
</script>

<style>
.reportpage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.report-submit {
    margin:10px;
    width: 150px;
    display: flex;
    justify-content: center;

}

.report-post-title{
    font-size: 20px;
}

.report-form {
    width:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>


