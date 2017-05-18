function onInput() {
	var rawJSON = document.getElementById("inputBox").value;
	document.getElementById("outputBox").value = JSON.stringify(JSON.parse(rawJSON), null, 2); 
	document.getElementById("outputBox").select()
}