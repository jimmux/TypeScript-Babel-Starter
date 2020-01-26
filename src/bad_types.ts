// This is just to make sure the type checking lets us know
// when something is wrong during the build.

const maybeAnInput = document.getElementById("actually-not-an-input");

maybeAnInput.value = "Hello!";
