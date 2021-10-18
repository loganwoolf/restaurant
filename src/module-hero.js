const emblem = () => {
	const emblem = document.createElement('div')
	const p = document.createElement('p')
	
	emblem.classList.add('emblem')
	emblem.appendChild(p)
	p.innerText = 'I'
	
   return emblem
}

const buttons = () => {
   const buttonsContainer = document.createElement('div')
   const buttonList = ['home', 'menu', 'contact']

   buttonList.forEach( (button) => {
      const element = document.createElement('button')
      element.classList.add('nav-button')
      element.classList.add(`btn-${button}`)
      element.innerText = `${button}`

      buttonsContainer.appendChild(element)
   })

   buttonsContainer.classList.add('buttons-container')


   return buttonsContainer
}

const hero = () => {
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
   hero.appendChild(buttons())

	return hero
}

export { hero }