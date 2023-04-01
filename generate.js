var mainContentGrammar;

async function loadGrammar(jsonFilePath) {
	var jsonFileContents = await fetch(jsonFilePath);
	var jsonObject = await jsonFileContents.json();
	var grammar = tracery.createGrammar(jsonObject);
	console.log("loaded grammar from: " + jsonFilePath);
	return(grammar);
}

async function loadAllGrammars() {
	mainContentGrammar = await loadGrammar('./main-grammar.json');
	console.log("finished loading grammars");
}

(async () => {
  loadAllGrammars();
})()

function generateFromGrammar(grammar) {
	console.log("grammar to flatten: " + grammar);
	return(grammar.flatten("#origin#"));
}

function reloadTraceryElements() {
	document.getElementById("tracery-main").innerHTML = generateFromGrammar(mainContentGrammar);
}