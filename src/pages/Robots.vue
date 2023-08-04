<template>
	<h1>Robots</h1>
	<hr />
	<div class="container">
		<div v-for="item in items">
			<div
				class="robotinfo"
				:style="{
					backgroundImage: 'url(' + item.imageUrl + ')',
					width: '300px',
					height: '400px',
				}"
			>
				<div class="darkenbox">
					<h2>{{ item.title }}</h2>
					<p>{{ item.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { items } from '../data/robots';
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p {
	font-family: Figtree, sans-serif;
	color: white;
}

h1 {
	text-align: center;
}

hr {
	width: 80%;
}

.container {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}

.robotinfo {
	flex: auto;
	flex-grow: 2;
	min-width: 250px;
	margin: 1rem;

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	.darkenbox {
		padding-left: 5%;
		padding-right: 5%;
		height: inherit;
	}
	p {
		color: transparent;
		transition: 100ms;
	}
}
.robotinfo:hover{
	p {
		color: white;
		transition: color 200ms ease-in-out;
	}
	.darkenbox {
		transition: background-color 200ms ease-in-out;
		background-color: rgba(0, 0, 0, 0.5);
	}
}
</style>
