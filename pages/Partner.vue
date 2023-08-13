<script setup lang="ts">
import { benefitTiers } from '~/data'
</script>

<template>
	<SectionHeader
		title="Become A Partner"
		subtitle="We are always looking for more partners in our quest to bring stem education
		to today's youth!"
	/>
	<div class="buttonWrapper">
		<FancyButton
      class="button"
			text="Contact"
			href="/contact"
			:newpage="false"
			:use-router="true"
		/>
		<FancyButton
      class="button"
			text="GoFundMe"
			href="https://www.gofundme.com/f/support-our-schools-robotics-team"
			newpage
			:use-router="false"
		/>
		<FancyButton
      class="button"
			text="Corporate"
			href="https://docs.google.com/document/d/1_AKteEcrHS7Chz8WQfl-UCybl7kI6Q30VZLYpGshqRU/edit"
			:newpage="true"
			:use-router="false"
		/>
	</div>
	<br />
	<div class="tiers">
		<div v-for="tier in benefitTiers" class="tier">
			<h3>{{ tier.title }}</h3>
			<h4>{{ tier.money }}</h4>
			<ul>
				<li v-for="benefit in tier.benefits">
					{{ benefit }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
.buttonWrapper {
	display: flex;
	justify-content: center;
  flex-wrap: wrap;
	.button {
		max-width: 600px;
		text-align: center;
    margin: 0.5rem;
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
