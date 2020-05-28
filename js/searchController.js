const searchController = (function () {
	function Search(query) {
		this.query = query;
	}

	Search.prototype.displayResults = async function (endpoint) {
		const res = await axios(endpoint);
		this.result = res.data.items;
	};

	return {
		Search,
	};
})();
