const contact = () => {
	
	const personFactory = (name, position, number) => {
		return {name, position, number}
	}

	const createPersonElement = (person) => {
		const personElement = document.createElement('section')
		personElement.classList.add('contact-person')

		const nameElement = document.createElement('p')
		const positionElement = document.createElement('p')
		const numberElement = document.createElement('p')
		nameElement.classList.add('contact-name')
		positionElement.classList.add('contact-position')
		numberElement.classList.add('contact-number')

		nameElement.innerText = person.name
		positionElement.innerText = person.position
		numberElement.innerText = person.number

		personElement.appendChild(nameElement)
		personElement.appendChild(positionElement)
		personElement.appendChild(numberElement)

		contactCards.appendChild(personElement)
	}
	
	
	const people = document.createElement('div')
	people.classList.add('people')

	const inquiriesSubtext = document.createElement('p')
	inquiriesSubtext.classList.add('page-subtext')
	inquiriesSubtext.innerText = 'Inquiries or private booking'

	const contactCards = document.createElement('main')
	contactCards.classList.add('contact-cards')
	
	const person1 = personFactory('Kevin Jager', 'Manager', '234-567-8901')
	const person2 = personFactory('Torsten Pabst', 'Manager / Owner', '234-567-8987')
	createPersonElement(person1)
	createPersonElement(person2)
	
	const locationSubtext = document.createElement('p')
	locationSubtext.classList.add('page-subtext')
	locationSubtext.innerText = 'Location Information'

	const address = document.createElement('p')
	address.innerText = "Inspired Coffee Co.\n2955 Carling Avenue\nOttawa, ON"
	address.classList.add('address')
	
	people.appendChild(inquiriesSubtext)
	people.appendChild(contactCards)
	people.appendChild(locationSubtext)
	people.appendChild(address)
	


	
	return people
}


export { contact }