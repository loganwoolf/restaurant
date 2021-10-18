import './style.css'
import { hero } from './module-hero'
import { home } from './module-home'
import { menu } from './module-menu'
import { contact } from './module-contact'


const content = () => {
	const content = document.createElement('div')
	content.classList.add('content')

	//list of functions to mount in order
	// content.appendChild(hero())
	content.appendChild(home())
	
	return content
}

const displayController = (() => {
	document.body.appendChild(hero())
	document.body.appendChild(content())

	
	
})()
