const menu = () => {

   const itemCallback = (item, parentElement) => {
      const listItem = document.createElement('li')
      listItem.textContent = item
      parentElement.appendChild(listItem)
   }

   const createCategory = (obj) => {
      const categoryElement = document.createElement('section')

      const categoryHeading = document.createElement('h2')
      categoryHeading.textContent = obj.name
      categoryHeading.classList.add('menu-heading')
      categoryElement.appendChild(categoryHeading)

      const subtextElement = document.createElement('p')
      subtextElement.textContent = obj.subtext
      subtextElement.classList.add('menu-subtext')
      categoryElement.appendChild(subtextElement)

      const categoryList = document.createElement('ul')
      categoryList.classList.add('menu-list')
      obj.items.forEach(item => itemCallback(item, categoryList))
      categoryElement.appendChild(categoryList)

      menu.appendChild(categoryElement)
   }

   const menu = document.createElement('main')
   menu.classList.add('menu')

   const subtext = document.createElement('p')
   subtext.textContent = "Our menu features our ethically sourced coffee as well as local and international favorites."
   subtext.classList.add('page-subtext')
   menu.appendChild(subtext)

   const coffee = {
      name: "Coffee",
      subtext: "Enjoy your favorite drink from our Swiss-made steamer",
      items: ['espresso', 'cappuccino', 'mocha', 'americano', 'latte', 'chai latte'],
   }
   const food = {
      name: "Food",
      subtext: "Delicious Italian inspired dishes made fresh",
      items: ['panini', 'flatbread', 'tartaglioni', 'ribollita (cucina povera)'],
   }
   const dessert = {
      name: "Dessert",
      subtext: "Delectable treats for any time of day",
      items: ['gelato', 'chocolate coffee cake', 'tiramisu'],
   }

   createCategory(coffee)
   createCategory(food)
   createCategory(dessert)
   
   return menu
}

export { menu }