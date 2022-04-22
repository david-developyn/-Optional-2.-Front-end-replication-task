load_country_list();
document.getElementById("search-box").addEventListener("input",
	function () {
		load_country_list();
	}
);
document.getElementById("region-filter").addEventListener("input",
	function () {
		load_country_list();
	}
);

function load_country_list() {
	const search_query = document.getElementById("search-box").value;
	const filter_query = "?fields=flag,name,population,region,subregion,capital,topLevelDomain,currencies,languages,borders";
	if (search_query === "") {
		window.fetch(`https://restcountries.com/v2/all${filter_query}`).then(
			function (response) {
				return response.json();
			}
		).then(
			function (data) {
				filter_by_region(data);
			}
		);
	} else {
		window.fetch(`https://restcountries.com/v2/name/${search_query}${filter_query}`).then(
			function (response) {
				return response.json();
			}
		).then(
			function (data) {
				filter_by_region(data);
			}
		);
	}
}

function filter_by_region(data) {
	const region = document.getElementById("region-filter").value;
	if (region !== "All") {
		data = data.filter(
			function (element) {
				return element["region"] === region;
			}
		)
	}

	////////////////////////////
	// COUNTRY LIST GENERATOR //

	const country_list_section = document.getElementById("country-list");
	country_list_section.innerHTML = "";
	data.forEach(
		function (element) {
			const country_item = document.createElement("a");
			country_item.href = `country-details.html?country=${window.JSON.stringify(element)}`;
			let capital_city = "";
			if (element["capital"]) {
				capital_city = `<li><strong>Capital:</strong> ${element["capital"]}</li>`;
			}
			country_item.innerHTML = `
				<img src='${element["flag"]}' />
				<h2>${element["name"]}</h2>
				<ul>
				<li><strong>Population:</strong> ${element["population"].toLocaleString()}</li>
				<li><strong>Region:</strong> ${element["region"]}</li>
				${capital_city}
				</ul>
			`;
			country_list_section.appendChild(country_item);
		}
	);

	// COUNTRY LIST GENERATOR //
	////////////////////////////
}