window.onscroll = () => {
	const scrollBlock = document.getElementById('offer-card-fixed');
	const position = window.scrollY;

	if (position > 800) {
		scrollBlock.classList.add('fixed');
	}
	else if (position < 800) {
		scrollBlock.classList.remove('fixed');
	}
}
