<template>
	<div class="body">
				<h2>Our Partners</h2>

					<h3>Alpha Wolf Partners: $2500+</h3>
			<hr>
			<div class='images'>
				<img><img><img>
			</div>

			<h3>Beta Wolf Partners: $2499-$1000</h3>
			<hr>
			<div class='images'>
				<img><img><img>
			</div>

			<h3>Delta Wolf Partners: $999-$500</h3>
			<hr>
			<ul>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
			</ul>

			<h3>Wolf Cub Partners: $499-$0</h3>
			<hr>
			<ul>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
			</ul>

    </div>
</template>

<script setup>

</script>

<style scoped>
	.body{
    background-color:rgb(62, 16, 88);
    text-align: center;
		display:block;
}

h3{
		text-align: center;
		color:white;
    font-family: 'Figtree', sans-serif;
	}

	h2{
		text-align: center;
		color:white;
    font-family: 'Figtree', sans-serif;
		margin-bottom:3rem;
	}
	hr{
		width:80%;
	}
	img{
		width:200px;
		height:150px;
		background-color:darkgrey;
		border:none;
		margin:0.5rem;
	}

	ul{
		text-align:left;
		width:80%;
		margin:auto;
		column-count: 3;
  	column-gap: 40px;
	}

	li{
		color:white;
	}

</style>