// 1. The English language consists of consonants and vowels (a, e, i, o, u). 
// When one or more vowels appear together, we refer to them as a vowel cluster. For example, 
// in the word "beautiful," there are vowel clusters "eau," "i," and "u," resulting in three vowel clusters.
// Write program to count vowel clusters
// INPUT: beautiful
// OUTPUT: 3

function run(words: string[]): number {
    let vowels = ["a","e","i","o","u"];
    let vowelGroup:string[] = []
    words.forEach(word => {
        let temp:string = ""
        for (let i = 0; i < word.length + 1; i++) {
            let letter = word.charAt(i);
            if(vowels.indexOf(letter) > -1){
                temp = temp.concat(letter)
            }else {
                if(temp){

                    vowelGroup.push(temp)
                }
                temp = "";
            }
        }
    });
    return vowelGroup.length;
}
let words = ["beautiful", "taro"];
let answer = run(words);
console.log(answer)
