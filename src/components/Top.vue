<template>
  <div class="header" >
    <img src="../assets/teamLogo.png" alt="team logo" >
    <div class="title">
        <h1>FIRST Robotics Team 7243</h1>
        <p>Robo Lobo Bellos</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

p{
  font-size: medium;
}
.header{
    display:flex;
    
    background: rgb(102,40,156);
    background: linear-gradient(90deg, rgba(102,40,156,1) 0%, rgba(32,29,56,1) 100%);
}

.header img{
	width:40%;
	max-width: 150px;
	max-height: 225px;
	min-width:120px;
	min-height:175px;
}

.header .title {
    padding-left:5%;
    text-align:left;
    width:auto;
    color:whitesmoke;
    font-family: 'Open Sans', sans-serif;
}

h1,h3{
	text-align:left;
}
</style>