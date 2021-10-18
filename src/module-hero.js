const emblem = () => {
	const emblem = document.createElement('div')
	const p = document.createElement('p')
	
	emblem.classList.add('emblem')
	emblem.appendChild(p)
	p.innerText = 'I'
	
   return emblem
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

	return hero
}

export { hero }