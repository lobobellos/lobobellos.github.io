<template>
	<div class="body">
			<h3 id="mainText">We are always looking for more partners in our quest to bring stem education to today's youth. </h3><br>

			<div class='tiers'>
				<div >
					<h3>Alpha Wolf Tier</h3>
				</div>
				<div>
					<h3>beta Wolf Tier</h3>
				</div>
				<div>
					<h3>Delta Wolf Tier</h3>
				</div>
				<div>
					<h3>Wolf Cub Tier</h3>
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

	.tiers{
		display:flex;
		flex-wrap:wrap
	}
	.tiers div{
		text-align:center;
		border:2px solid orange;
		margin:15px;
		padding:15px;
		min-width:200px;
	}


</style>