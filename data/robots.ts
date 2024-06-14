import robot2018 from '~/assets/robots/robot-2018.jpg'
import robot2020 from '~/assets/robots/robot-2020.jpg'
import robot2022 from '~/assets/robots/robot-2022.jpg'
import robot2023 from '~/assets/robots/robot-2023.jpg'
import robot2024 from '~/assets/robots/robot-2024.png'

export const robots = [
  {
    imageUrl: robot2024,
    title: '2024: Jimmi',
    description: `Jimmi, our first attempt at a swerve-drive based robot used 4 mk4 SDS swerve-drive modules,
    driven by 8 REV NEO 1.1 motors.
    Additionally, Jimmi made heavy use of sheet aluminum and box extrusion, both of which were cut to shape using
    our CNC machine. Jimmi used a combination of a pneumatic cylinder and flywheels to shoot game pieces,
    two rollers to intake game pieces, and polybelts to move game pieces between the intake and the launcher.
    Jimmi was also our first robot to be fully modeled in CAD.
    `
  },
  {
    imageUrl: robot2023,
    title: '2023: Nikola',
    description: `Nikola was by far our most mechanically
  comblex robot when it was made. It uses a holonomic 
  mecanum drivebase to traverse the 
  game field, and a 2-joint arm, along
  with a linear-slide based claw, 
  which allows Nikola to manipulate 
  game pieces. Finally, Nikola has a 
  pneumatic foot subsystem, which pushes
  a textured rubber brake into the ground,
  stopping the robot from moving, even
  on slanted surfaces.`,
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
  score points in the endgame.`,
  },
  {
    imageUrl: robot2020,
    title: '2020: B4By',
    description: ``,
  },
  {
    imageUrl: robot2018,
    title: '2018: jessica',
    description: ``,
  },
]