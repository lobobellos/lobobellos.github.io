<script setup lang="ts">
import { people } from '../data/contact.js'
import SectionHeader from '../components/SectionHeader.vue'
</script>

<template>
	<SectionHeader
		title="Contact"
		subtitle="Team representatives would love to get in contact with you"
	/>
	<div class="people">
		<div v-for="p in people" class="person">
			<h3>{{ p.name }}</h3>
			<h4>{{ p.title }}</h4>
			<a :href="'mailto:' + p.email">
				<h4>{{ p.email }}</h4>
			</a>
			<a :href="'tel:+1' + p.phone">
				<h4>{{ p.phone }}</h4>
			</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
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
