const base = (function () {
	const elements = {
		loaderContainer: document.querySelector('.loader-container'),
		loader: document.querySelector('.loader'),
		languagesContainer: document.querySelector('.languages-container'),
		grid: document.querySelector('.grid'),
		navigation: document.querySelector('.navigation'),
	};

	return {
		elements,
	};
})();
