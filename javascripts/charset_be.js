﻿// braille characters corresponding to bn-IN locale 
// source: World Braille Usage, Third Edition 
//         <http://www.perkins.org/assets/downloads/worldbrailleusage/world-braille-usage-third-edition.pdf>
var characters = {
    // Alphabet
    // | অ | আ | ই | ঈ | উ | ঊ | এ | ঐ | ও | ঔ | ঋ | ঌ | 
    "অ":1,"আ":345,"ই":24,"ঈ":35,"উ":136,"ঊ":1256,"এ":15,"ঐ":34,"ও":135,"ঔ":246,"ঋ":{5, 1235}:,"ঌ":{5, 123},
    // | ক | খ | গ | ঘ | ঙ | চ | ছ | জ | ঝ | ঞ | 
    "ক":13, "খ":46, "গ":1245, "ঘ":126, "ঙ":346, "চ":14, "ছ":16, "জ":245, "ঝ":356, "ঞ":25,
    // | ট | ঠ | ড | ঢ | ণ | ত | থ | দ | ধ | ন | 
    "ট":23456, "ঠ":2456, "ড":1246, "ঢ":123456, "ণ":3456, "ত":2345, "থ":1456, "দ":145, "ধ":2346, "ন":1345,
    // | প | ফ | ব | ভ | ম | য | র | ল | ৱ |
    "প":1234, "ফ":235, "ব":12, "ভ":45, "ম":134, "য":13456, "র":1235, "ল":123, "ৱ":1236,
    // | শ | ষ | স | হ | ক্ষ | জ্ঞ | ড় | ঢ় | য় | ৎ | 
    "শ":146, "ষ":12346, "স":234, "হ":125, "ক্ষ":12345, "জ্ঞ":156, "ড়":12456, "ঢ়":{5, 12456}, "য়":1, "ৎ":,
    // Diacritics
    // | ক্ | কং | কঃ | কঁ | কঽ | 
    "ক্":4, "কং":56, "কঃ":6, "কঁ":3, "কঽ":2,
    // Numbers
    // | ১ | ২ | ৩ | ৪ | ৫ | ৬ | ৭ | ৮ | ৯ | ০ |
    "১":{3456, 1}, "২":{3456, 12}, "৩":{3456, 14}, "৪":{3456, 145}, "৫":{3456, 15}, "৬":{3456, 124}, "৭":{3456, 1245}, "৮":{3456, 125}, "৯":{3456, 24}, "০":{3456, 245}
    // Punctuation (common across languages)
    "," : 2,	//⠂
    ":" : 25,	//⠒
	";" : 23,	//⠆
    "।" : 256,
    "." : 256,
    "॥" : {256, 256},
    "?" : 236,
    "’" : 2,
    "!" : 235,	//⠖
    "“" : 236,
    "”" : 356,
    "-" : 36,	//⠤
    "—" : {36 36},	//⠤⠤
    "*" : {35, 35},	//⠔⠔
    "#" : 3456,	//⠼
    "[" : 2356,
	"]" : 2356,
};