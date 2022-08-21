<template>
	<div class="body">

        <h3 id="aboutUs">Thank You to all of our amazing sponsors!</h3>

					<h2>Tier 1 sponsors: $2500+</h2>
			<hr>
			<div class='images'>
				<img><img><img>
			</div>

			<h2>Tier 2 sponsors: $2499-$1000</h2>
			<hr>
			<div class='images'>
				<img><img><img>
			</div>

			<h2>Tier 3 sponsors: $999-$500</h2>
			<hr>
			<ul>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
			</ul>

			<h2>Tier 4 sponsors: $499-$0</h2>
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