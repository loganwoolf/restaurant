import './style.css'
import RestaurantImage from './images/restaurant.jpg'

/*function component() {
	const element = document.createElement('div')

	const heroImage = new Image();
	heroImage.src = RestaurantImage;

	element.appendChild(heroImage)

	return element
}*/

function emblem() {
	const emblem = document.createElement('div')
	const p = document.createElement('p')
	
	emblem.classList.add('emblem')
	emblem.appendChild(p)
	p.innerText = 'I'
	
	return emblem
}

function hero() {
	const hero = document.createElement('div')
	const banner = document.createElement('div')
	const logo = document.createElement('h1')
	
	hero.classList.add('hero')
	banner.classList.add('banner')
	logo.classList.add('logo')
	
	logo.innerText = 'Inspired Coffee Co.'

	banner.appendChild(emblem())
	banner.appendChild(logo)
	hero.appendChild(banner)

	return hero
}

function main() {
	const main = document.createElement('div')
	const p = document.createElement('p')

	main.classList.add('main')

	p.innerText = "Come in and feel truly inspired! Enjoy our calm and relaxing atmosphere with ethically sourced coffee and culinary delights for any time of day."

	main.appendChild(p)

	return main
}

function content() {
	const content = document.createElement('div')
	content.classList.add('content')

	//list of functions to mount in order
	content.appendChild(hero())
	content.appendChild(main())

	return content
}

document.body.appendChild(content())
