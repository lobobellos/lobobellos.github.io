<template>
	<div class="title">
		<h2>Contact Us</h2>
		<h3>Multiple team representatives would love to get in contact with you</h3>
	</div>
	<div class="people">
		<div v-for="p in people" class="person">
			<h3>{{ p.name }}</h3>
			<h4>{{ p.title }}</h4>
			<a :href="'mailto:'+ p.email"><h4>{{ p.email }}</h4></a>
			<a :href="'tel:+1'+p.phone"><h4>{{ p.phone }}</h4></a>
		</div>
	</div>
</template>

<script setup lang="ts">
import {people} from '../data/contact.js'
</script>

<style scoped lang="scss">
.title{
	text-align: center;
	margin-right:10%;
	margin-left:10%
}
.people {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	.person {
		text-align: center;
		margin: 1rem;
		padding: 1rem;
		min-width: 285px;
		color: white;
		background: linear-gradient(
			45deg,
			rgba(32, 29, 56, 1) 0%,
			rgba(102, 40, 156, 1) 50%,
			rgba(32, 29, 56, 1) 100%
		);
		background-color:rgb(42, 9, 88);
		border-radius: 3rem;
		a{
			text-decoration:none;
		}
	}
}
</style>
