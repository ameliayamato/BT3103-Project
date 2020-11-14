import { Pie } from "vue-chartjs";
//import { db } from '../firebase';
//import { mapGetters } from "vuex";
//import firebase from "firebase/app"; 
//import "firebase/firestore"; 
export default {
	extends: Pie,
	//props:['id'],
	data: () => ({
		chartdata: {
			labels: ["January", "February", "March", "April"],
			datasets: [
				{
					label: "Sales",
					data: [400, 300, 150, 100],
					backgroundColor: ["aqua", "lightgreen", "red", "orange"],
					borderWidth: 0.5,
					borderColor: "#000",
				},
				{
					label: "Sales2",
					data: [40, 30, 10, 15],
					backgroundColor: ["aqua", "lightgreen", "red", "orange"],
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							min: 0,
						},
					},
				],
			},
			layout: {
				padding: {
					left: 5,
					right: 0,
					top: 0,
					bottom: 10,
				},
			},
		},
	}),
	//computed: {
	//	// map `this.user` to `this.$store.getters.user`
	//	...mapGetters({
	//		user_: "user"
	//	})
	//},
	mounted() {
		//if(this.user_.loggedIn){
        //    let userRef = db.collection('users').doc(this.user_.uid);
        //    userRef.get().then((doc) => {
		//		this.user = doc.data();
		//		console.log(this.user)
        //    }).catch((error) => {
        //        console.log(error)
        //    })
        //}
		this.renderChart(this.chartdata, this.options);
	},
};
