<template>
	<div class="body">
		<h2> Become a Partner</h2>
			<h3 id="mainText">We are always looking for more partners in our quest to bring stem education to today's youth! Please visit our <router-link to='/contact' id='contactLink'>contact</router-link> page for more information.</h3><br>

			<div class='tiers'>
				<div >
					<h3>Alpha Wolf Tier</h3>
					<ul>
						<li>Name on website</li>
						<li>logo/Name on t-shirt</li>
						<li>Name on Robot</li>
						<li>Name announced at competitions</li>
					</ul>
				</div>
				<div>
					<h3>Beta Wolf Tier</h3>
					<ul>
						<li>Name on website</li>
						<li>logo/Name on t-shirt</li>
						<li>Name on Robot</li>
					</ul> 
				</div>
				<div>
					<h3>Delta Wolf Tier</h3>
					<ul>
						<li>Name on website</li>
						<li>logo/Name on t-shirt</li>
					</ul>
				</div>
				<div>
					<h3>Wolf Cub Tier</h3>
					<ul>
						<li>Name on website</li>
					</ul>
				</div>
			</div>
    </div>
</template>

<script setup>

	
</script>

<style scoped>
	.body{
    background-color:rgb(62, 16, 88);
		display:block;
	}

	h3{
		text-align: center;
		color:white;
    font-family: 'Figtree', sans-serif;
		width:80%;
		margin:auto;
		max-width:600px;
	}

	#contactLink{
		color:orange;
	}

	.tiers{
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
	}
	.tiers div{
		text-align:center;
		border:2px solid orange;
		margin:15px;
		padding:15px;
		min-width:285px;
	}

	li{
		color:white;
		text-align:left;
		font-family: 'Figtree', sans-serif;
	}


</style>