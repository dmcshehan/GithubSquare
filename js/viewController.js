const viewController = (function () {
	let endpoint, language;
	function getValue(e) {
		language = e.target.textContent;
		return language;
	}

	function toggleActive(e) {
		const allButtons = document.querySelectorAll('.flex-center button');
		allButtons.forEach(function (cur) {
			cur.classList.remove('active');
		});
		e.target.classList.toggle('active');
	}

	function getEndpoint() {
		endpoint = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
		return endpoint;
	}

	function showList(array, pageNumber = 1) {
		let resultPerPage = 12;
		let lower = (pageNumber - 1) * resultPerPage;
		let upper = pageNumber * resultPerPage;
		array.slice(lower, upper).forEach((obj) => {
			let html = `
     <div class="card-content card-small top-content user-card">
        <div class='user-image-container image-container-small'>
                <a class='white' href=${obj.svn_url}><img src="${obj.owner.avatar_url}" alt="" class="user-image img-small"></a>
            </div>
            <div class='user-info'>
                <h2 class='name mb-medium'><a href=${obj.svn_url}>${obj.name}</a></h2>
            </div>
            <div class='git-info'>
                <ul>
                    <li class="followers">
                        <div class='followers-count medium'>${obj.stargazers_count}</div>
                        <span class="followers-text small"><img class='color-star' src='./img/starfilled.png'></span>
                    </li>
                    <li class="stars">
                        <div class='stars-count medium'>${obj.forks}</div>
                        <span class="forked-text small"><img class='color-forked' src='./img/forked.svg'></span>
                    </li>
                    <li class="forked">
                        <div class='forked-count medium'>${obj.open_issues}</div>
                         <span class="stars-text small"><img class='color-issues' src='./img/alert.svg'</span>
                    </li>
                </ul>
            </div>
            </div>`;
			base.elements.grid.insertAdjacentHTML('beforeend', html);
		});
	}

	const showLanguages = function (data) {
		base.elements.languagesContainer.insertAdjacentHTML('afterbegin', data);
	};

	const showNavigation = function () {
		let html = ` <button id='pagination-1' class='brk-btn pagination selected'>1</button>
            <button id='pagination-2' class='brk-btn pagination'>2</button>
            <button id='pagination-3' class='brk-btn pagination'>3</button>`;
		base.elements.navigation.insertAdjacentHTML('afterbegin', html);
	};

	return {
		getValue,
		toggleActive,
		getEndpoint,
		showList,
		showLanguages,
		showNavigation,
	};
})();
