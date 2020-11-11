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
                    <img class="profile-pic" src="static/profilepic.png">
                </div>
                <div class="listing-sub-container-2">
                    <p class="listing-title">{{item.title}}</p>
                    <div class="listing-category-details">
                        <p class="listing-category-details-text">Location: {{item.location}}</p>
                        <p class="listing-category-details-text">Type: {{item.type}}</p>
                    </div>
                    <p class="listing-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    <div class="listing-button-group">
                        <b-button href="#" size="sm">Report</b-button>
                        <b-button href="#" size="sm">Message</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestsPage',
        data() {
            return {
                location_selected: null,
                type_selected: null,
                listings: [
                    {
                        id: 123,
                        profile_id: "123",
                        profile_name: "Bob",
                        title: "I need Blankets",
                        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
                        location: "Tampines",
                        type: "Advance",
                        posted_on: Date.now()
                    },
                    {
                        id: 124,
                        profile_id: "123",
                        profile_name: "Bob",
                        title: "I need Pillows",
                        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
                        location: "Marymount",
                        type: "Basic",
                        posted_on: Date.now()
                    }
                ]
            }
        },
        computed: {
            listingsProcessed() {
                if (!this.location_selected && !this.type_selected){
                    return this.listings;
                } else if (this.location_selected) {
                    return this.listings.filter((listing_) => {
                        return listing_.location == this.location_selected
                    })
                } else if (this.type_selected){
                    return this.listings.filter((listing_) => {
                        return listing_.type == this.type_selected
                    })
                } else {
                    return this.listings.filter((listing_) =>{
                        return listing_.type == this.type_selected && listing_.location == this.location_selected
                    })
                }
            },
            uniqueLocations(){
                var locationOptions = [null]
                var locationOptionsFinal = [{value: null, text:'Location'}]
                for (var i = 0; i < this.listings.length; i++){
                    if (!(this.listings[i].location in locationOptions)){
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
                    if (!(this.listings[i].type in typeOptions)){
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
