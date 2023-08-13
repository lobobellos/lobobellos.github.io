<script setup lang="ts">
import { robots } from '../data'
</script>

<template>
	<SectionHeader title="Robots" />
	<div class="container">
		<div
			v-for="item in robots"
			class="robotinfo"
			:style="{
				backgroundImage: 'url(' + item.imageUrl + ')',
			}"
		>
			<div class="darkenbox">
				<h2>{{ item.title }}</h2>
				<p>{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	.robotinfo {
		display: block;
		margin: 2rem;
		width: 300px;
		height: 400px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		.darkenbox {
			padding-left: 5%;
			padding-right: 5%;
			height: inherit;
		}
		h2 {
			padding-top: 1rem;
			margin-top: 0;
		}
		p {
			color: transparent;
			transition: 100ms;
		}
		&:hover {
			p {
				color: white;
				transition: color 200ms ease-in-out;
			}
			.darkenbox {
				transition: background-color 200ms ease-in-out;
				background-color: rgba(0, 0, 0, 0.5);
			}
		}
	}
}
</style>
