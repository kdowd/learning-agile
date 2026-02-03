function imaged(e) {
	console.log(e.target.title);
}

function toTheTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

const fastNav = document.querySelector('.fast-nav');
fastNav.addEventListener('click', toTheTop);
