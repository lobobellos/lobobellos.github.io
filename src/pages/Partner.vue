<script setup lang="ts">
import { tiers } from '../data/partnerBenefits'
import SectionHeader from '../components/SectionHeader.vue'
</script>

<template>
	<SectionHeader
		title="Become A Partner"
		subtitle="We are always looking for more partners in our quest to bring stem education
		to today's youth!"
	/>
	<div class="textWrapper">
		<h3>
			Visit our
			<router-link to="/contact" id="contactLink">contact</router-link>
			page for more information, or donate on our
			<a href="https://www.gofundme.com/f/support-our-schools-robotics-team">
				gofundme
			</a>
			.
		</h3>
	</div>
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

<style scoped lang="scss">
	a {
		color: orange;
	}
.textWrapper {
	display: flex;
	justify-content: center;
	h3 {
		max-width: 600px;
		text-align: center;
		width:80%;
	}
}
.tiers {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	.tier {
		background: linear-gradient(
			45deg,
			rgba(32, 29, 56, 1) 0%,
			rgba(102, 40, 156, 1) 50%,
			rgba(32, 29, 56, 1) 100%
		);
		background-color: rgb(42, 9, 88);
		text-align: center;
		border-radius: 3rem;
		margin: 0.8rem;
		padding: 0.8rem;
		width: 285px;
		transition: box-shadow 500ms ease-in-out;
		li {
			text-align: left;
		}
		&:hover {
			box-shadow: 0px 0px 4px 5px rgba(255, 255, 255, 0.367);
		}
	}
}
</style>
