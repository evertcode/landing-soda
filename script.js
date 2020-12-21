const swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlider: true,
		slidesPerView: 'auto',
		coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
		},
		loop: true,
});

function toggleMenu(){
	const menuToggle = document.querySelector('.toggle');
	const navigation = document.querySelector('.navigation');

	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');

}
