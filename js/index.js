document.addEventListener('DOMContentLoaded', function () {
	// функция вывода меню через массив
	function showMenu(array, menuToShow) {
		array.forEach(menu => menu.classList.remove('choice-menu__show'))
		menuToShow.classList.add('choice-menu__show')
	}

	const choiceMenuMainWrapper = document.querySelectorAll(
		'.choice-menu__main-wrapper'
	)

	function getMoreMinWidth(array) {
		array.forEach(wrapper => (wrapper.style.minWidth = '55.75rem'))
	}

	// управление бургер меню
	const burgerBtn = document.getElementById('navigationBtn')
	const mobileBurgerBtn = document.getElementById('navigationBtnMobile')

	function burgerMenuActions() {
		const menus = [
			document.getElementById('phonesMenu'),
			document.getElementById('pcMenu'),
			document.getElementById('tvMenu'),
			document.getElementById('audioMenu'),
		]

		const phoneChoice = document.getElementById('choicePhones')
		const pcChoice = document.getElementById('choicePc')
		const tvChoice = document.getElementById('choiceTv')
		const audioChoice = document.getElementById('choiceAudio')

		phoneChoice.addEventListener('click', () => {
			showMenu(menus, menus[0])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		pcChoice.addEventListener('click', () => {
			showMenu(menus, menus[1])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		tvChoice.addEventListener('click', () => {
			showMenu(menus, menus[2])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		audioChoice.addEventListener('click', () => {
			showMenu(menus, menus[3])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		burgerBtn.addEventListener('click', () => {
			burgerBtn.classList.toggle('navigation-btn--transform')
			const choiceMenu = document.querySelector('.choice-menu')
			choiceMenu.classList.toggle('choice-menu--show')

			const eventsMenu = document.querySelector('.choice-menu--events')
			if (eventsMenu.classList.contains('choice-menu--show')) {
				eventsMenu.classList.remove('choice-menu--show')
			}
		})

		// на мобильной кнопке открывается другое меню choice-list--mobile !!!! сделать!!!!!
		mobileBurgerBtn.addEventListener('click', () => {
			mobileBurgerBtn.classList.toggle('navigation-btn--transform')
			// const choiceMenu = document.querySelector('.choice-menu')
			// choiceMenu.classList.toggle('choice-menu--show')
			const choiceMenu = document.getElementById('choiceMenuMobile')
			choiceMenu.classList.toggle('choice-menu--show')

			mobileNavigation.style.display = 'none'

			// const eventsMenu = document.querySelector('.choice-menu--events')
			// if (eventsMenu.classList.contains('choice-menu--show')) {
			// 	eventsMenu.classList.remove('choice-menu--show')
			// }
		})
	}

	// управление меню событий
	function eventsMenuActions() {
		const eventMenus = [
			document.getElementById('whoMenu'),
			document.getElementById('whyMenu'),
			document.getElementById('whatMenu'),
		]

		const eventsBtn = document.getElementById('eventsBtn')
		const eventsMenu = document.querySelector('.choice-menu--events')

		eventsBtn.addEventListener('click', () => {
			eventsMenu.classList.toggle('choice-menu--show')

			const mainMenu = document.querySelector('.choice-menu--main')
			if (mainMenu.classList.contains('choice-menu--show')) {
				mainMenu.classList.remove('choice-menu--show')
				burgerBtn.classList.remove('navigation-btn--transform')
				mobileBurgerBtn.classList.remove('navigation-btn--transform')
			}
		})

		const whoChoice = document.getElementById('choiceWho')
		const whyChoice = document.getElementById('choiceWhy')
		const whatChoice = document.getElementById('choiceWhat')

		// console.log(eventMenus, whoChoice, whyChoice, whatChoice)
		whoChoice.addEventListener('click', () => {
			showMenu(eventMenus, eventMenus[0])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		whyChoice.addEventListener('click', () => {
			showMenu(eventMenus, eventMenus[1])
			getMoreMinWidth(choiceMenuMainWrapper)
		})

		whatChoice.addEventListener('click', () => {
			showMenu(eventMenus, eventMenus[2])
			getMoreMinWidth(choiceMenuMainWrapper)
		})
	}

	burgerMenuActions()
	eventsMenuActions()

	// управление мобильным меню:

	// const mobileMenu = document.getElementById('secondMobileMenu')
	// const catalogBtn = document.getElementById('catalogBtn')
	// const backBtn = document.getElementById('backBtn')
	// const backBtnText = document.getElementById('backBtnText')

	// const secondPhoneChoice = document.getElementById('choicePhones2')
	// const secondPcChoice = document.getElementById('choicePc2')
	// const secondTvChoice = document.getElementById('choiceTv2')
	// const secondAudioChoice = document.getElementById('choiceAudio2')

	// catalogBtn.addEventListener('click', () => {
	// 	mobileMenu.innerHTML = ''
	// 	backBtn.style.display = 'flex'
	// 	backBtnText.textContent = 'Каталог'

	// 	mobileMenu.append(backBtn)
	// })
})
