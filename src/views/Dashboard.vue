<template>
  <div class="container">
    <chart
		v-if="loaded"
		:chartdata="chartdata"
		:options="options"
		width="500" height="300"/>
  </div>
</template>

<script>
import chart from '../Chart.vue'
import { db } from '../firebase';
import { mapGetters } from "vuex";
//import firebase from "firebase/app"; 
import "firebase/firestore"; 

export default {
	name: 'Dashboard',
	props:['id'],
	components: { chart },
	data: () => ({
		loaded: false,
		chartdata: null
	}),
	computed: {
			// map `this.user` to `this.$store.getters.user`
			...mapGetters({
				user_: "user"
			}),
	},
	async mounted()	{
		this.loaded = false
		try {
			if(this.user_.loggedIn) {
				let userRef = db.collection('users').doc(this.user_.uid);
				userRef.get().then(async (doc) => {
					this.user = doc.data();
					//console.log(this.user)
					this.chartdata = {
						labels: ["help_count", "request_count"],
						datasets: [
							{
								label: "Dashboard",
								data: [this.user.help_count, this.user.request_count],
								backgroundColor: ["red", "orange"],
								borderWidth: 0.5,
								borderColor: "#000",
							},
						],
					}
					this.options = {
						scales: {
							yAxes: [
								{
									ticks: {
										min: 0,
									},
								},
							],
						},
						layout:	{
							padding: {
								left: 2,
								right: 0,
								top: 0,
								bottom: 2,
							},
						},
					},
				this.loaded = true
				}).catch((error) => {
					console.log(error)
				})
			}
		} catch (e) {
			console.error(e)
		}
	}
}
</script>