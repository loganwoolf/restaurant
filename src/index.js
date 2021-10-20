import './style.css'
import { hero } from './module-hero'
import { home } from './module-home'
import { menu } from './module-menu'
import { contact } from './module-contact'


const displayController = (() => {
	document.body.appendChild(hero())
	
	const content = document.createElement('div')
	content.classList.add('content')
	document.body.appendChild(content)
	
	content.appendChild(home()) //change default page
	
	const changeView = (e) => {
		let page = e.srcElement.id
		switch(page) {
			case "home":
				viewHomePage()
				break;
			case "menu":
				viewMenuPage()
				break;
			case "contact":
				viewContactPage()
				break;
		}
	}
	
	const viewHomePage = () => {
		content.replaceChild(home(), content.childNodes[0])
	}
	
	const viewMenuPage = () => {
		content.replaceChild(menu(), content.childNodes[0])
	}
	
	const viewContactPage = () => {
		content.replaceChild(contact(), content.childNodes[0])
	}

	const buttonsContainer = document.querySelector('.buttons-container')
	buttonsContainer.addEventListener('click', changeView)
	
})()
