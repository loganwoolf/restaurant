const contact = () => {
	const people = document.createElement('div')
	people.classList.add('people')
	const p = document.createElement('p')
	p.innerText = 'Here are some people'
	p.classList.add('page-subtext')
	people.appendChild(p)

	const manager = document.createElement('div')

	const owner = document.createElement('div')

	return people
}

const personFactory = (name, position, number) => {
	return {name, position, number}
}

const manager = personFactory('Kevin Jager', 'Manager', '234-567-8901')
const owner = personFactory('Torsten Pabst', 'Manager / Owner', '234-567-8987')


export { contact }