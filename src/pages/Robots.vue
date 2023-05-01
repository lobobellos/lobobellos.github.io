<template>
  <h1>Robots</h1>
  <hr>
  <div class="container">

    <div v-for="item in items">
      <div class="robotinfo" :style="{
        backgroundImage: 'url(' + item.imageUrl + ')',
        width: '300px',
        height: '400px',
      }">
        <div class="darkenbox">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import robot2023 from "../assets/robots/robot-2023.jpg";
import robot2022 from "../assets/robots/robot-2022.jpg";
import robot2020 from "../assets/robots/robot-2020.jpg";
import robot2018 from "../assets/robots/robot-2018.jpg";

interface Item {
  imageUrl: string;
  title: string;
  description: string;
}



export default {
  data(): {items: Item[]} {
    return {
      items: [
        {
          imageUrl: robot2023,
          title: '2023: Nikola',
          description: `Nikola is by far our most mechanically
        comblex robot. It uses a holonomic 
        mecanum drivebase to traverse the 
        game field, and a 2-joint arm, along
        with a linear-slide based claw, 
        which allows Nikola to manipulate 
        game pieces. Finally, Nikola has a 
        pneumatic foot subsystem, which pushes
        a textured rubber brake into the ground,
        stopping the robot from moving, even
        on slanted surfaces.`
        },
        {
          imageUrl: robot2022,
          title: '2022: Kronos',
          description: `Kronos used a holonomic drivebase to
        navigate the field with ease,
        and a multiple chain-driven axles,
        which were capable of intaking game
        pieces, and shooting them into the air,
        to score points. Secondarily, Kronos used
        a Limelight 2+ to track parts of the game field,
        and align the robot with targets.
        Finally, it used a climbing mechanism to
        score points in the endgame.`
        },
        {
          imageUrl: robot2020,
          title: '2020: B4By',
          description: `used mechanisms to do things`
        },
        {
          imageUrl: robot2018,
          title: '2018: jessica',
          description: `used mechanisms to do things`
        }
      ]
    };
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: Figtree, sans-serif;
  color: white;
}

h1 {
  text-align: center;
}

hr {
  width: 80%;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.robotinfo {
  flex:auto;
  flex-grow: 2;
  min-width: 250px;
  margin: 1rem;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.robotinfo .darkenbox {
  padding-left: 5%;
  padding-right: 5%;
  height: inherit;
}

.robotinfo p {
  color: transparent;
  transition: 100ms;
}

.robotinfo:hover p {
  color: white;
  transition: color 200ms ease-in-out;
}

.robotinfo:hover .darkenbox {
  transition: background-color 200ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

