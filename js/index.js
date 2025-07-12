document.addEventListener('DOMContentLoaded', function () {
	const menus = [
		document.getElementById('phonesMenu'),
		document.getElementById('pcMenu'),
		document.getElementById('tvMenu'),
		document.getElementById('audioMenu'),
	]

	function showMenu(menuToShow) {
		menus.forEach(menu => menu.classList.remove('choice-menu__show'))
		menuToShow.classList.add('choice-menu__show')
	}

	const phoneChoice = document.getElementById('choicePhones')
	const pcChoice = document.getElementById('choicePc')
	const tvChoice = document.getElementById('choiceTv')
	const audioChoice = document.getElementById('choiceAudio')

	phoneChoice.addEventListener('click', () => {
		showMenu(menus[0])
	})

	pcChoice.addEventListener('click', () => {
		showMenu(menus[1])
	})

	tvChoice.addEventListener('click', () => {
		showMenu(menus[2])
	})

	audioChoice.addEventListener('click', () => {
		showMenu(menus[3])
	})

	const burgerBtn = document.getElementById('navigation-btn')
	const mobileBurgerBtn = document.getElementById('navigation-btn-mobile')

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('navigation-btn--transform')
		const choiceMenu = document.querySelector('.choice-menu')
		choiceMenu.classList.toggle('choice-menu--show')
	})

	mobileBurgerBtn.addEventListener('click', () => {
		mobileBurgerBtn.classList.toggle('navigation-btn--transform')
		const choiceMenu = document.querySelector('.choice-menu')
		choiceMenu.classList.toggle('choice-menu--show')
	})
})
