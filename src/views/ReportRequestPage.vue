<template>
    <div class="reportpage">
        <h3 id="title">Report Post</h3>
        <p class="report-post-title">Title: {{request.subject}}</p>
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
            request: {}

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
            if(this.text !=""){
                // append report to report array
                this.request.reports.push(this.text);
                
                // update db
                db.collection('requests').doc(this.$route.params.id)
                .update(this.request).then(() => {
                    console.log("Request successfully updated!");
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