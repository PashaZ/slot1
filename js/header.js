var header = document.querySelector('header'),
	scrollPrev = 0;

window.addEventListener('scroll', function () {
	var scrolled = window.scrollY;

	if (scrolled > 65 && scrolled > scrollPrev) {
		header.classList.add('out');
	} else {
		header.classList.remove('out');
	}
	scrollPrev = scrolled;
});


var dropDowns = document.querySelectorAll('.dropdown-menu input');
for (var i = 0; i < dropDowns.length; i++) {
	dropDowns[i].addEventListener('click', function () {
		var list = this.parentNode.querySelector('.dropdown-menu__links');
		this.classList.toggle('opened-dropdown');
		if (this.classList.contains('opened-dropdown')) {
			list.style.maxHeight = list.scrollHeight + 'px';
		} else {
			list.style.maxHeight = 0;
		};
	});
}


// aside-scroll.js-----------------------------------------------------
window.onscroll = () => {
	const scrollBlock = document.getElementById('offer-card-fixed');
	const position = window.scrollY;

	if ((770 < position) && (position < 4300)) {
		scrollBlock.classList.add('fixed');
		scrollBlock.classList.remove('fixed-to-bottom');

	}
	else if (position < 770) {
		scrollBlock.classList.remove('fixed');
		scrollBlock.classList.remove('fixed-to-bottom');

	}
	else if (position >= 4300) {
		scrollBlock.classList.remove('fixed');
		scrollBlock.classList.add('fixed-to-bottom');

	}
}


// header-flags.js------------------------------------------
(() => {
	const refs = {
		openCloseModalBtn: document.querySelector('.header-flags-button'),
		changeArrow: document.querySelector('.button-arrow'),
		modal: document.querySelector('.header-flags-section'),
	};

	refs.openCloseModalBtn.addEventListener('click', toggleModalBtn);

	function toggleModalBtn() {
		refs.modal.classList.toggle('is-hidden');
		refs.changeArrow.classList.toggle('change-arrow');
	}
})();
