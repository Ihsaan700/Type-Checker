// variables
const sentenceTag = document.querySelector("input.checker_config-input");
const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typeSizeOutput = document.querySelector("span.font-size-output")
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// event listener to copy the text from the sentence input to the H1
sentenceTag.addEventListener("keyup", function () {
	// if the sentence has something written in it (a value)
	if (this.value) {
		outputTag.value = this.value;
	} else {
		outputTag.value = originalText;
	}
});

// when typing in text-area, sentenceTag is is updated accordingly
outputTag.addEventListener("keyup", function () {
	sentenceTag.value = this.value;
});

// when font-size-range is adjusted, the font-size-output (number) adjusts accordingly
typeSizeTag.addEventListener("input", function () {
		outputTag.style.fontSize = `${this.value}px`;
		typeSizeOutput.innerHTML = `${this.value} px`;
});
