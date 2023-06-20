<template>
	<h2>Become a Partner</h2>
	<h3 id="mainText">
		We are always looking for more partners in our quest to bring stem education
		to today's youth! Please visit our
		<router-link to="/contact" id="contactLink">contact</router-link>
		page for more information, or donate on our
		<a href="https://www.gofundme.com/f/support-our-schools-robotics-team">
			gofundme
		</a>
		.
	</h3>
	<br />
	<div class="tiers">
		<div class="tier" v-for="tier in tiers">
			<h3>{{ tier.title }}</h3>
			<h4>{{ tier.money }}</h4>
			<ul>
				<li v-for="benefit in tier.benefits">{{ benefit }}</li>
			</ul>
		</div>
	</div>
</template>

<script type="module" lang="ts">
import { tiers } from '../data/partnerBenefits.js'
export default {
	data() {
		return {
			tiers,
		}
	},
}
</script>

<style scoped lang="scss">
h2,
h3,
h4 {
	color: white;
	font-family: 'Figtree', sans-serif;
	width: 80%;
	margin: auto;
	max-width: 600px;
	text-align: center;
}

h2 {
	margin-bottom: 1rem;
}

a {
	color: orange;
}

.tiers {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	div {
		text-align: center;
		border: 4px outset rgb(100, 100, 100);
		margin: 15px;
		padding: 15px;
		min-width: 285px;
	}
}

li {
	color: white;
	text-align: left;
	font-family: 'Figtree', sans-serif;
}
</style>
