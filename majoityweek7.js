
// Find the element that occurs the most in an array:

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(arr) {
    var frequency = {};
    var maxFreq = 0;
    var mostFrequentItem;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }

        if (frequency[item] > maxFreq) {
            maxFreq = frequency[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem + " ( " + maxFreq + " times )";
}

console.log(mostFrequent(arr1)); // "a ( 5 times )"
