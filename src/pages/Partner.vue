<template>
	<div class="body">
		<h2>Become a Partner</h2>
		<h3 id="mainText">
			We are always looking for more partners in our quest to bring stem
			education to today's youth! Please visit our
			<router-link to="/contact" id="contactLink">contact</router-link>
			page for more information, or donate on our
			<a href="https://www.gofundme.com/f/support-our-schools-robotics-team">
				gofundme
			</a>
			.
		</h3>
		<br />

		<div class="tiers">
			<div>
				<h3>Alpha Wolf Tier</h3>
				<h4>$2500+</h4>
				<ul>
					<li>Name on website</li>
					<li>Logo/Name on t-shirt</li>
					<li>Logo/Name on Robot</li>
					<li>Name announced at competitions</li>
				</ul>
			</div>
			<div>
				<h3>Beta Wolf Tier</h3>
				<h4>$2499-$1000</h4>
				<ul>
					<li>Logo/Name on website</li>
					<li>Logo/Name on t-shirt</li>
					<li>Name on Robot</li>
				</ul>
			</div>
			<div>
				<h3>Delta Wolf Tier</h3>
				<h4>$999-$500</h4>
				<ul>
					<li>Name on website</li>
					<li>Logo/Name on t-shirt</li>
				</ul>
			</div>
			<div>
				<h3>Wolf Cub Tier</h3>
				<h4>$499-$1</h4>
				<ul>
					<li>Name on website</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.body {
	background-color: rgb(62, 16, 88);
	display: block;
}

h3 {
	color: white;
	font-family: 'Figtree', sans-serif;
	width: 80%;
	margin: auto;
	max-width: 600px;
}

h4 {
	color: white;
	font-family: 'Figtree', sans-serif;
	width: 80%;
	margin: auto;
	max-width: 600px;
}

#contactLink,
a {
	color: orange;
}

.tiers {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.tiers div {
	text-align: center;
	border: 4px outset rgb(100, 100, 100);
	margin: 15px;
	padding: 15px;
	min-width: 285px;
}

li {
	color: white;
	text-align: left;
	font-family: 'Figtree', sans-serif;
}
</style>
