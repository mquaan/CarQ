import ford from '../Assets/ford.png'
import chevy from '../Assets/chevy.jpg'
import toyota from '../Assets/toyota.jpg'
import ram from '../Assets/ram.jpg'
import nissan from '../Assets/nissan.jpg'
import gmc from '../Assets/gmc.jpg'
import subaru from '../Assets/subaru.jpg'
import jeep from '../Assets/jeep.jpg'
import dodge from '../Assets/dodge.jpg'

const cars = [
  {
    image: ford,
    title: 'Used 2019 Ford F-150',
    miles: '22,000 miles',
    specs: 'AWD 4-Cylinder Turbo',
    price: '$32,000',
    sellerStatus: 'Best Seller'
  },
  {
    image: chevy,
    title: 'Used 2020 Chevy Silverado',
    miles: '18,000 miles',
    specs: 'AWD V6 Turbo',
    price: '$35,000',
    sellerStatus: 'New Arrival'
  },
  {
    image: toyota,
    title: 'Used 2018 Toyota Tacoma',
    miles: '30,000 miles',
    specs: 'AWD 4-Cylinder',
    price: '$28,000',
    sellerStatus: 'Great Deal'
  },
  {
    image: ram,
    title: 'Used 2021 RAM 1500',
    miles: '15,000 miles',
    specs: 'AWD V8 HEMI',
    price: '$42,000',
    sellerStatus: 'Popular'
  },
  {
    image: nissan,
    title: 'Used 2019 Nissan Frontier',
    miles: '25,000 miles',
    specs: 'AWD V6',
    price: '$29,500',
    sellerStatus: 'Best Value'
  },
  {
    image: gmc,
    title: 'Used 2020 GMC Sierra 1500',
    miles: '20,000 miles',
    specs: 'AWD V8 Turbo',
    price: '$38,000',
    sellerStatus: 'Certified Pre-Owned'
  },
  {
    image: subaru,
    title: 'Used 2020 Subaru Outback',
    miles: '14,000 miles',
    specs: 'AWD 4-Cylinder',
    price: '$33,000',
    sellerStatus: 'Hot Deal',
  },
  {
    image: jeep,
    title: 'Used 2019 Jeep Gladiator',
    miles: '22,500 miles',
    specs: 'AWD V6',
    price: '$40,000',
    sellerStatus: 'Highly Rated'
  },
  {
    image: dodge,
    title: 'Used 2020 Dodge RAM 2500',
    miles: '12,000 miles',
    specs: 'AWD V8',
    price: '$45,000',
    sellerStatus: 'Featured'
  }
    // Add more car objects as needed
];

export default cars;