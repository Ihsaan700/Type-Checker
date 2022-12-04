// variables
const sentenceTag = document.querySelector("input.checker_config-input");
const outputTag = document.querySelector("textarea.cheacker_output");
const orginalText = outputTag.value;

// event listener to copy the text from the sentence input to the H1
sentenceTag.addEventListener("keyup", function () {
	// if the sentence has something written in it (a value)
	if (this.value) {
		outputTag.innerHTML = this.value;
	} else {
		outputTag.innerHTML = orginalText;
	}
});

// when typing in text-area, sentenceTag is is updated accordingly
outputTag.addEventListener("keyup", function () {
	sentenceTag.value = this.value
})
