<template>
    <div class="requestspage">
        <h4 id="title">Current Requests for Help</h4>
        <div class="filters-container">
            <b-form-select v-model="location_selected" :options="uniqueLocations"></b-form-select>
            <b-form-select v-model="type_selected" :options="uniqueTypes"></b-form-select>
        </div>
        <div class="listings-container">
            <div v-for="item in listingsProcessed" v-bind:key="item.id" class="listing">
                <div class="listing-sub-container-1">
                    <p class="profile-name">{{item.profile_name}}</p>
                    <img class="profile-pic" v-bind:src="item.profile_pic">
                </div>
                <div class="listing-sub-container-2">
                    <p class="listing-title">{{item.title}}</p>
                    <div class="listing-category-details">
                        <p class="listing-category-details-text">Location: {{item.location}}</p>
                        <p class="listing-category-details-text">Type: {{item.type}}</p>
                    </div>
                    <p class="listing-detail">{{item.details}}</p>
                    <div class="listing-button-group">
                        <b-button :href="'/report-request/' + item.id" size="sm">Report</b-button>
                        <b-button :href="'/send-contact-request/' + item.id" size="sm">Contact</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase';

    export default {
        name: 'RequestsPage',
        data() {
            return {
                location_selected: null,
                type_selected: null,
                listings: []
            }
        },
        created() {
            db.collection('requests').onSnapshot((snapshotChange) => {
                snapshotChange.forEach((doc) => {
                    this.listings.push({
                        id: doc.id,
                        profile_name: doc.data().username,
                        profile_pic: doc.data().profilepic,
                        title: doc.data().subject,
                        location: doc.data().location,
                        type: doc.data().type,
                        details: doc.data().details,
                    })
                });
            })
        },
        computed: {
            listingsProcessed() {
                if (this.location_selected && this.type_selected){
                    return this.listings.filter((listing_) =>{
                        return listing_.type == this.type_selected && listing_.location == this.location_selected
                    })
                } else if (this.location_selected) {
                    return this.listings.filter((listing_) => {
                        return listing_.location == this.location_selected
                    })
                } else if (this.type_selected){
                    return this.listings.filter((listing_) => {
                        return listing_.type == this.type_selected
                    })
                } else {
                    return this.listings;
                }
            },
            uniqueLocations(){
                var locationOptions = [null]
                var locationOptionsFinal = [{value: null, text:'Location'}]
                for (var i = 0; i < this.listings.length; i++){
                    if (!(locationOptions.includes(this.listings[i].location))){
                        locationOptions.push(this.listings[i].location)
                        locationOptionsFinal.push({
                            value: this.listings[i].location, text: this.listings[i].location
                        })
                    }
                }
                return locationOptionsFinal
            },
            uniqueTypes(){
                var typeOptions = [null]
                var typeOptionsFinal = [{value: null, text:'Type'}]
                for (var i = 0; i < this.listings.length; i++){
                    if (!(typeOptions.includes(this.listings[i].type))){
                        typeOptions.push(this.listings[i].type)
                        typeOptionsFinal.push({
                            value: this.listings[i].type, text: this.listings[i].type
                        })
                    }
                }
                return typeOptionsFinal
            }
        }
    }
</script>

<style>

.requestspage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
