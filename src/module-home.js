import Cake from './images/cake.jpg'
import Coffee from './images/coffee.jpg'
import IceCream from './images/ice-cream.jpg'
import Pasta from './images/pasta.jpg'


const home = () => {
	const home = document.createElement('div')
	const p = document.createElement('p')

	home.classList.add('home')
	p.classList.add('page-subtext')

	p.innerText = "Come in and feel truly inspired! Enjoy our calm and relaxing atmosphere with ethically sourced coffee and culinary delights for any time of day."

	home.appendChild(p)

	const imageContainer = document.createElement('div')
	imageContainer.classList.add('home-image-container')

	const imgCake = new Image()
	imgCake.src = Cake
	const imgCoffee = new Image()
	imgCoffee.src = Coffee
	const imgIceCream = new Image()
	imgIceCream.src = IceCream
	const imgPasta = new Image()
	imgPasta.src = Pasta
	
	imageContainer.appendChild(imgCoffee)
	imageContainer.appendChild(imgPasta)
	imageContainer.appendChild(imgCake)
	imageContainer.appendChild(imgIceCream)

	home.appendChild(imageContainer)

	return home
}

export { home }
