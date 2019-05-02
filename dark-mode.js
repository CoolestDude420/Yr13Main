

var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function() {
	if(this.checked) {
		trans()
		document.documentElement.setAttribute("data-theme", "dark")
		alert("WARNING: \nDark Mode is only experimental and may have performance or visual issues! ")
	} else {
		trans()
		document.documentElement.setAttribute("data-theme", "light")
	}
})

let trans = () => {
	document.documentElement.classList.add("transition");
	window.setTimeout(() => {
		document.documentElement.classList.remove("transition")
	},1000)
}


