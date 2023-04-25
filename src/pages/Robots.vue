<template>
  <h1>Robots</h1>
  <hr>
  <div class="robotinfo">
    <div>
      <h2>2023: Nikola</h2>
      <p>
        Nikola is by far our most mechanically
        comblex robot. It uses a holonomic 
        mecanum drivebase to traverse the 
        game field, and a 2-joint arm, along
        with a linear-slide based claw, 
        which allows Nikola to manipulate 
        game pieces. Finally, Nikola has a 
        pneumatic foot subsystem, which pushes
        a textured rubber brake into the ground,
        which stops the robot from moving, even
        on slanted surfaces.
      </p>
    </div>
    <img src="../assets/robots/robot-2023.jpg" alt="2023 robot" srcset="">
    <div>
      <h2>2022: Kronos</h2>
      <p>
        Kronos used a holonomic drivebase to 
        navigate the field with ease,
        and a multiple chain-driven axles, 
        which were capable of intaking game 
        pieces, and shooting them into the air, 
        to score points. Secondarily, Kronos used
        a Limelight 2+ to track parts of the game field,
        and align the robot with targets.
        Finally, it used a climbing mechanism to
        score points in the endgame.
      </p>
    </div>
    <img src="../assets/robots/robot-2022.jpg" alt="2023 robot" srcset="">
  </div>
</template>

<style scoped>

  h1,h2,h3,h4,h5,h6,p{
    font-family: Figtree, sans-serif;
    color: white;
  }

  h1{
    text-align: center;
  }

  hr{
    width: 80%;
  }
  .robotinfo {
    display: flex;
    margin-left: 30%;
    margin-right: 30%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .robotinfo img {
    width: 80%;
    min-width: 350px;
    transition: 500ms;
  }

  .robotinfo img:hover{
    border: 2px solid white;
    border-radius: 3px;
  }

  .robotinfo div {
    min-width: 400px;
  }
</style>

