<template>
	<h2>Contact Us</h2>
	<h3>Multiple team representatives would love to get in contact with you</h3>
	<div class="people">
		<div v-for="p in people" class="person">
			<h3>{{ p.name }}</h3>
			<h4>{{ p.title }}</h4>
			<a :href="'mailto:'+ p.email"><h4>{{ p.email }}</h4></a>
			<h4>{{ p.phone }}</h4>
		</div>
	</div>
</template>

<script lang="ts">
import {people} from '../data/contact.js'
export default {
	data() {
		return {
			people
		}
	},
	computed: {

	}
}
</script>

<style scoped lang="scss">
h2,
h3,
h4 {
	color: whitesmoke;
	text-align: center;
	font-family: 'Figtree', sans-serif;
}
.people {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	.person {
		text-align: center;
		border: 4px outset rgb(100, 100, 100);
		margin: 15px;
		padding: 15px;
		min-width: 285px;
		color: white;
	}
}
</style>
