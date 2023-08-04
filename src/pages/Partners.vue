<template>
	<div class="body">
		<h2>Our Partners</h2>

		<div class="tier" v-for="tier in tiers">
			<h3>{{ tier.title }}</h3>
			<hr />
			<div class="images" v-if="tier.usesImages">
				<div class="imageContainer" v-for="image in tier.images">
					<img :src="image" />
				</div>
			</div>
			<div class="names" v-else>
				<ul>
					<li v-for="name in tier.names">{{ name }}</li>
				</ul>	
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
import { tiers } from '../data/partners.js'
</script>

<style scoped lang="scss">
.body {
	background-color: rgb(62, 16, 88);
	text-align: center;
	display: block;
	color: white;
	font-family: 'Figtree', sans-serif;
	h2 {
		margin-bottom: 3rem;
	}
	hr {
		width: 80%;
	}
	.images {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.imageContainer {
			height: 150px;
			width: 200px;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0.5rem;
			img {
				width: 175px;
				height: auto;
			}
		}
	}
}

ul {
	text-align: left;
	width: 80%;
	margin: auto;
	column-count: 3;
	column-gap: 40px;
}

li {
	color: white;
	font-family: 'Figtree', sans-serif;
}
</style>
