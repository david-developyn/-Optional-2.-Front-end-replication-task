let data = JSON.parse(
	new URL(window.location.href).searchParams.get("data")
);
document.getElementById("name").innerText = data["name"];
document.getElementById("population").innerText = data["population"];
document.getElementById("region").innerText = data["region"];
document.getElementById("sub-region").innerText = data["subregion"];
document.getElementById("capital").innerText = data["capital"];
document.getElementById("domain").innerText = data["topLevelDomain"];
document.getElementById("currencies").innerText = data["currencies"];
document.getElementById("language").innerText = data["language"];