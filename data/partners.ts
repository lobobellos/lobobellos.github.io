import Comcast from '/images/comcast.jpg'
import NREL from '/images/NREL.png'
import NECLogo from '/images/NECLogo.jpg'
import CareerConnect from '/images/careerconnect.jpg'

export const partners = [
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
    names: [
      'You?'
    ]
  },
  {
    title: 'Wolf Cub Partners: $499-$1',
    usesImages: false,
    names: [
      'You?'
    ]
  }
]