<template>
  <div class="header" >
    <div class="imageContainer">
      <router-link to="/">
        <img src="../assets/teamLogo.png" alt="team logo" >
      </router-link>
    </div>
    <div class="title">
        <h1>FIRST Robotics Team 7243</h1>
        <p>Robo Lobo Bellos</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

p{
  font-size: medium;
}
.header{
  display:flex;
  background: rgb(102,40,156);
  background: linear-gradient(90deg, rgba(102,40,156,1) 0%, rgba(32,29,56,1) 100%);
  .imageContainer{
    display: flex;
    justify-content: center;
    align-items: center;

      img{
      width:60%;
      margin: auto;
      display: block;
    }
  }
  .title {
      padding-left:5%;
      text-align:left;
      width:auto;
      color:whitesmoke;
      font-family: 'Open Sans', sans-serif;
  }
}


h1,h3{
	text-align:left;
}
</style>