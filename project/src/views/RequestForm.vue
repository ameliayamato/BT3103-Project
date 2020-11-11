<template>
	<div id="request-form">
		<div id="text">
			What assistance do you require?
		</div>
		<form id="form">
			<div>
				<input type="text" id="location" placeholder="Location" v-model="message">
				<img @mouseover="hover1 = true" @mouseleave="hover1 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover1">Input the location you require assistance in</span>
			<div>
				<input type="text" id="subject" placeholder="Subject" v-model="message"> 
				<img @mouseover="hover2 = true" @mouseleave="hover2 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover2">Type of help you need</span>
			<div>
				<textarea id="details" v-model="message" rows="10" placeholder="Tell us more about the type of help you need"></textarea>
				<img @mouseover="hover3 = true" @mouseleave="hover3 = false" id="information" src="/static/information.png">
			</div>
			<span v-if="hover3">Fill in any important details of your request</span>
			<button id="submit" @click="submit()" >Submit</button>
		</form>
	</div>
</template>

<script>
export default {
  name: "RequestForm",
   data() {
    return {
		hover1: false,
		hover2: false,
		hover3: false,
    };
  }
}
</script>

<style scoped>

    #text {
		text-align: center;
		font-size: 30px;
		padding-top:50px;
	}

	#form {
		display: flex;
		flex-direction: column;
		margin: 10px;
		align-items: center;
	}

	#location {
		margin: 10px;
		width: 450px;
		text-align: center;
	}

	#subject {
		margin: 10px;
		width: 450px;
		text-align: center;
	}

	#details {
		margin: 10px;
		width: 450px;
		text-align: center;
	}

	#submit {
		margin: 10px;
		width: 10%;
		height: 40px;
		border-radius: 6px;
		background-color: #FEC89A;
		color: white;
		border-color: white;
	}

	#information {
		height: 20px;
	}
</style>