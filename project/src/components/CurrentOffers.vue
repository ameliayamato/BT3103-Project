<template>
  <div>
    <h1>Current offers for help</h1>
    <div class="offers">
    <ul>
        <li v-for="offer in offersList" v-bind:key="offer.id">
            <div id="user">
                <h3 id="username">{{offer.username}}</h3> 
                <img v-bind:src="offer.profilepic"/>
                </div>
            <div id="content">
                <h2>{{offer.subject}}</h2>
                <span>{{offer.details}}</span>
            </div>
        </li>
    </ul>
        <div id="button">
            <button>
                <router-link to="/offers" exact id="seemore">See more</router-link>
            </button>
            
        </div>
    </div>
  </div>
</template>


<script>
import {db} from '../firebase.js'

export default {
  
  data(){
    return{
      offersList:[],
      paraText:'Current offers for help'
    }
  },
  components: {
  },
  methods:{
    fetchOffers:function(){
      db.collection('offers').get().then((querySnapShot)=>{
        let offer={}
        querySnapShot.forEach(doc=>{
            offer=doc.data()
            offer.id=doc.id
            console.log(offer)
            offer.show=true
            this.offersList.push(offer)      
        })
      })
    }
    
  },
  created(){
    this.fetchOffers()
    
  }
  
  
}
</script>

<style scoped>

.offers{
    width: 100%;
}

#user {
    display: inline-block;
    width: 20%;
    float: left;
    padding: 10px 20px 10px 20px;
}

#content {
    display: inline-block;
    width: 80%;
    float: left;
    text-align: left;
    padding: 20px;
}

ul{
    display: flex;
    list-style-type: none;
    padding: 0;
    flex-direction: column;
}

li{
    text-align: center;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: #AAAAAA; 
    margin: 10px;
    border-radius: 10px;
}

img{
  width: 70px;
  height: 70px;
}

h1 {
    font-size: 28px;
    font-weight: 800;
    text-align: center;
    padding-bottom: 10px;
}

h2 {
    font-size: 20px;
}

h3 {
    text-align: center;
}

span {
    font-size: 14px;
}

#username {
    font-size: 18px;
}

button {
    height: 40px;
    width: 100px;
    border-style: solid;
    border-width: 0px;
    border-radius: 10px;
    background-color: #ffb5a7;
    color: white;
    margin: auto;
}

#seemore {
    color: white;
}

#button {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 100px;
}


</style>