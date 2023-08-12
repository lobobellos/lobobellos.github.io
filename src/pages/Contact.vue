<script setup lang="ts">
import { people } from '../data/contact.js'
import SectionHeader from '../components/SectionHeader.vue'
</script>

<template>
	<div class="titleContainer">
		<div class="images">
			<a href="https://github.com/lobobellos" target="_blank">
				<img src="../assets/github.png" alt="github" id="github" />
			</a>
			<a href="https://instagram.com/robolobobellos" target="_blank">
				<img src="../assets/instagram.webp" alt="instagram" />
			</a>
			<a href="https://www.youtube.com/@RoboLoboBellos" target="_blank">
				<img src="../assets/youtube.png" alt="youtube" />
			</a>
		</div>
		<div class="secHead">
			<SectionHeader
				title="Contact"
				subtitle="Team representatives would love to get in touch with you"
			/>
		</div>
	</div>

	<div class="people">
		<div v-for="p in people" class="person">
			<h3>{{ p.name }}</h3>
			<h4>{{ p.title }}</h4>
			<h4>
				<a :href="'mailto:' + p.email">{{ p.email }}</a>
			</h4>
			<h4>
				<a :href="'tel:+1' + p.phone">{{ p.phone }}</a>
			</h4>
		</div>
	</div>
</template>

<style scoped lang="scss">
.titleContainer {
	display: flex;
	margin-bottom: 5%;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap-reverse;
	.images {
		display: flex;
		justify-content: center;
		align-items: center;
		a {
			img {
				width: 35px;
				padding: 0.5rem;
			}
			#github {
				filter: invert(100%);
			}
		}
	}
}
.people {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	.person {
		text-align: center;
		margin: 1rem;
		padding: 1rem;
		width: 80%;
		max-width: 275px;
		color: white;
		background: linear-gradient(
			45deg,
			rgba(32, 29, 56, 1) 0%,
			rgba(102, 40, 156, 1) 50%,
			rgba(32, 29, 56, 1) 100%
		);
		background-color: rgb(42, 9, 88);
		border-radius: 3rem;
		a {
			text-decoration: underline;
			color: orange;
		}
		transition: box-shadow 500ms ease-in-out;
		&:hover {
			box-shadow: 0px 0px 4px 5px rgba(255, 255, 255, 0.367);
		}
	}
}
</style>
