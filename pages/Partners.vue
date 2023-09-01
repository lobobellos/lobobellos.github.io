<script setup lang="ts">
import { partners } from '../data'
</script>

<template>
	<div class="body">
		<div class="secHead">
			<SectionHeader
				title="Our Partners"
				subtitle="Our partners are some of the best in the business. Our gratitude goes out to them for their support."
			/>
		</div>
		<div class="tier" v-for="tier in partners">
			<h3>{{ tier.title }}</h3>
			<hr />
			<div class="images" v-if="tier.usesImages">
				<div class="imageContainer" v-for="image in tier.images">
					<NuxtImg :src="image" />
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

<style scoped lang="scss">
.secHead {
	margin-bottom: 3rem;
}
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
	.tier{
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
		.names ul{
			text-align: left;
			width: 80%;
			margin: auto;
			column-count: 3;
			column-gap: 40px;
			li{
				color: white;
				font-family: 'Figtree', sans-serif;
			}
		}
	}
}
</style>
