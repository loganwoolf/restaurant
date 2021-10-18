const home = () => {
	const home = document.createElement('div')
	const p = document.createElement('p')

	home.classList.add('home')

	p.innerText = "Come in and feel truly inspired! Enjoy our calm and relaxing atmosphere with ethically sourced coffee and culinary delights for any time of day."

	home.appendChild(p)

	return home
}

export { home }
