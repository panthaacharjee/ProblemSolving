function vowelsAndConsonants(s) {
    let Vowels = "aAeEiIoOuU";
    var vowel =  []
    
    for(var i=0; i<s.length; i++){
         if (Vowels.indexOf(s[i]) !== -1) {
            vowel.push(s[i])
        }
    }
     for(var i=0; i<vowel.length; i++){
        console.log(vowel[i])
    }
    var constant =  s.replace(/[aeiouAEIOU]/g, '').split("")
    let chars = newS.split('').sort().join('');
    
   for(var i=0; i<constant.length; i++){
       console.log(constant[i])
   }
    console.log(vowel)
}