// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build:{
		minify:true,
	},
  head: {
    title: 'FRC Team 7243: Robo-Lobo-Bellos',
    meta: [
      { charset: 'UTF-8' },
      { hid: 'description', name: 'description', content: 'FRC Team 7243, The Robo-Lobo-Bellos is a FIRST robotics team based out of Northeast Denver, CO, USA' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'google-site-verification', content: 'cctW95-WZzqkEHNaiVrSJ6bfMLZOMg1PpQ3zEBu15rc' },
      { name: 'keywords', content: 'robo, lobo, bellos, robotics, first, frc, 7243, team, robot' }
    ],
    link: [
      { rel: 'icon', type: 'image/icon', href: '/favicon.ico' }
    ]
  },
})
