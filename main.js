function toast({type ='success', title ='', msg= '', duration = 3000}) {
	const main = document.getElementById('toast')
	if(main) {
		const toast = document.createElement('div')
		
		const icons = {
			success: 'fa-solid fa-circle-check',
			info: 'fa-solid fa-circle-exclamation',
			warning: 'fa-solid fa-triangle-exclamation',
			error: 'fa-solid fa-circle-exclamation'
		}
		const icon = icons[type]
		const autoRemoveToast = setTimeout(function() {
			main.removeChild(toast)
		}, duration + 1000)

		toast.onclick = function(e) {
			if(e.target.closest('.toast__close')) {
				main.removeChild(toast)
				clearTimeout(autoRemoveToast)
			}
		}

		const delay = (duration/1000).toFixed(2)
		toast.classList.add('toast',`toast--${type}`)
		toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
		toast.innerHTML = `
			<div class="toast__icon">
				<i class="${icon}"></i>
			</div>
			<div class="toast__body">
				<h3 class="toast__title">${title}</h3>
				<div class="toast__msg">${msg}</div>
			</div>

			<div class="toast__close">
				<i class="fa-solid fa-xmark"></i>
			</div>
		`
		main.appendChild(toast)
	}

}