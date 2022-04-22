let data = JSON.parse(
	new URL(window.location.href).searchParams.get("country")
);
document.getElementById("flag").src = data["flag"];
document.getElementById("name").innerText = data["name"];
document.getElementById("native-name").innerText = data["name"];
document.getElementById("population").innerText = data["population"].toLocaleString();
document.getElementById("region").innerText = data["region"];
document.getElementById("sub-region").innerText = data["subregion"];
document.getElementById("capital").innerText = data["capital"];
document.getElementById("domain").innerText = data["topLevelDomain"];
document.getElementById("currencies").innerText = data["currencies"][0]["name"];
document.getElementById("languages").innerText = data["languages"][0]["name"];
let fetch_countries_url = "https://restcountries.com/v2/alpha?codes=";
data["borders"].forEach(
	function (element) {
		fetch_countries_url += `${element},`;
	}
);
fetch_countries_url = fetch_countries_url.slice(0, -1);
fetch_countries_url += "&fields=flag,name,population,region,subregion,capital,topLevelDomain,currencies,languages,borders";
window.fetch(fetch_countries_url).then(
	function (response) {
		return response.json();
	}
).then(
	function (data) {
		data.forEach(
			function (element) {
				const country_details_link = document.createElement("a");
				country_details_link.href = `country-details.html?country=${window.JSON.stringify(element)}`;
				country_details_link.innerText = element["name"];
				document.getElementById("border-countries").appendChild(country_details_link);
			}
		)
	}
);