let franc = require('franc');
let process = require('process');
let langs = require('langs')

let text = process.argv[2];

function getLang(text) {
    try {
        languageCode = franc(text);

        lang = langs.where("3", languageCode);

        console.log(lang.name);
    } catch (error) {
        console.log('Uh oh !! Error')
    }
}


getLang(text);