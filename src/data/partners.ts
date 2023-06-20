import Comcast from '../assets/comcast.jpg'
import NREL from '../assets/NREL.png'
import NECLogo from '../assets/NECLogo.jpg'
import CareerConnect from '../assets/careerconnect.jpg'

export const tiers = [
  {
    title: 'Alpha Wolf Partners: $2500+',
    usesImages: true,
    images: [
      Comcast,
      NREL,
      NECLogo,
    ]
  },
  {
    title: 'Beta Wolf Partners: $2499-$1000',
    usesImages: true,
    images: [
      CareerConnect,
    ]
  },
  {
    title: 'Delta Wolf Partners: $999-$500',
    usesImages: false,
    names : [
      'You?'
    ]
  },
  {
    title: 'Wolf Cub Partners: $499-$1',
    usesImages: false,
    names : [
      'You?'
    ]
  }
]