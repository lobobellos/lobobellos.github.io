<script setup lang="ts">
import { ref, onMounted } from 'vue'
import threeLines from '../assets/threeLines.png'
import teamLogo from '../assets/teamLogo.png'

const width = ref<number>(null)
const threeLinesImg = ref<HTMLImageElement>(null)
const dropdownItems = ref(null)
let rotation = 0
let translateY = -200

onMounted(() => {
	resizeHandler()
	window.addEventListener('resize', () => {
		resizeHandler()
	})
	threeLinesImg.value.onclick = toggleNavBar
})
function resizeHandler() {
	width.value = window.innerWidth
	threeLinesImg.value.hidden = !(width.value < 1050)
	if (width.value < 1050) {
		rotation = 0
		translateY = -200
		dropdownItems.value.style.transform = `translateY(${translateY}%)`
		threeLinesImg.value.style.transform = `rotate(${rotation}deg)`
	}
}
function toggleNavBar() {
	rotation = -rotation - 90
	translateY = -translateY - 200
	dropdownItems.value.style.transform = `translateY(${translateY}%)`
	threeLinesImg.value.style.transform = `rotate(${rotation}deg)`
}
</script>

<template>
	<div class="navbar">
		<div class="imageContainer">
			<router-link to="/">
				<img :src="teamLogo" alt="team logo" />
			</router-link>
		</div>
		<div class="links" v-if="width >= 1050">
			<router-link to="/"><div>About us</div></router-link>
			<router-link to="/first"><div>What is FIRST</div></router-link>
			<router-link to="/robots"><div>Our Robots</div></router-link>
			<router-link to="/partner"><div>Become a Partner</div></router-link>
			<router-link to="/partners"><div>Our Partners</div></router-link>
			<router-link to="/contact"><div>Contact us</div></router-link>
			<a href="http://www.thebluealliance.com/team/7243" target="_blank">
				<div>Event history</div>
			</a>
		</div>
		<div class="threeLines" hidden>
			<img :src="threeLines" ref="threeLinesImg" alt="three lines icon" />
		</div>
	</div>
	<div class="dropdown" ref="dropdownItems" v-if="width < 1050">
		<div class="items">
			<router-link @click="() => toggleNavBar()" to="/">
				<div>About us</div>
			</router-link>
			<router-link @click="() => toggleNavBar()" to="/first">
				<div>What is FIRST</div>
			</router-link>
			<router-link @click="() => toggleNavBar()" to="/robots">
				<div>Our Robots</div>
			</router-link>
			<router-link @click="() => toggleNavBar()" to="/partner">
				<div>Become a Partner</div>
			</router-link>
			<router-link @click="() => toggleNavBar()" to="/partners">
				<div>Our Partners</div>
			</router-link>
			<router-link @click="() => toggleNavBar()" to="/contact">
				<div>Contact us</div>
			</router-link>
			<a href="http://www.thebluealliance.com/team/7243" target="_blank">
				<div>Event history</div>
			</a>
		</div>
	</div>
	<div class="custom-shape-divider-top-1660162422">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			></path>
		</svg>
	</div>
</template>

<style scoped lang="scss">
.navbar {
	background-color: rgb(46, 46, 46);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.imageContainer {
		padding: 0.75rem;
		img {
			border-radius: 25%;
			width: 4rem;
			margin: auto;
			display: block;
			transition: box-shadow 300ms ease-in-out;
			&:hover {
				box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.218);
			}
		}
	}
	.threeLines {
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			transition: transform 200ms ease-in-out;
			width: 3rem;
			padding-right: 2rem;
			padding-left: 2rem;
		}
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		a {
			text-decoration: none;
			div {
				background-color: rgb(46, 46, 46);
				color: whitesmoke;
				padding: 1rem;
				padding-top: 0.75rem;
				min-width: 75px;
				font-size: 1.3rem;
				transition: 300ms;
				font-family: 'Oswald', sans-serif;
				background-image: linear-gradient(
					to bottom,
					rgb(46, 46, 46) 50%,
					blueviolet 50%
				); /* Set gradient to new color */
				background-size: 100% 200%; /* Set size of gradient */
				transition: background-position 0.3s; /* Set transition duration */
				border-radius: 0.5rem;
				&:hover {
					background-position: -0% -100%; /* Move gradient upwards */
				}
			}
		}
	}
}
.dropdown {
	z-index: 2;
	background-color: rgb(46, 46, 46);
	position: absolute;
	right: 0px;
	width: max-content;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border-bottom-left-radius: 3rem;
	transition: transform 400ms ease-in-out;
	.items {
		display: flex;
		flex-direction: column;
		padding-bottom: 1rem;
		a {
			margin-top: 1rem;
			margin-left: 1rem;
			margin-right: 1rem;
			font-size: 1.2rem;
			text-decoration: none;
			color: whitesmoke;
			font-family: 'Oswald', sans-serif;
			div {
				text-align: center;
				background-image: linear-gradient(
					to right,
					rgb(46, 46, 46) 50%,
					blueviolet 50%
				); /* Set gradient to new color */
				background-size: 200% 100%; /* Set size of gradient */
				transition: background-position 0.3s; /* Set transition duration */
				border-radius: 0.5rem;
				&:hover {
					background-position: -100% -0%; /* Move gradient upwards */
				}
			}
		}
	}
}
.custom-shape-divider-top-1660162422 {
	width: 100%;
	overflow: hidden;
	line-height: 0;
	svg {
		position: relative;
		display: block;
		width: calc(150% + 1.3px);
		height: 80px;
	}
	.shape-fill {
		fill: rgb(46, 46, 46);
	}
}
</style>
