function generatePermutations(input) {
    var array1 = input.split("");
    var answers = [];

    function swap(i, j) {
        var temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
    }

    function permute(startIndex) {
        if (startIndex === array1.length - 1) {
            answers.push(array1.join(''));
        } else {
            for (var i = startIndex; i < array1.length; i++) {
                swap(startIndex, i);
                permute(startIndex + 1);
                swap(startIndex, i); // Backtrack
            }
        }
    }

    permute(0);
    return answers.sort();
}

var input = "ABC";
var result = generatePermutations(input);
console.log(result);
