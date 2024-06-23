// Capitalize words in a string:


function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
}

console.log(capitalizeWords('js string exercises')); // "Js String Exercises"
