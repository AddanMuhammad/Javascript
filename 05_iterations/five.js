//for each
const coding = ["Python", "Ruby", "Javascript", "C++", "Java"];

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item)
}
);


function printMe(items) {
    // console.log(items);
}

coding.forEach(printMe)


coding.forEach((value, index, arr) => {
    console.log(value, index, arr);
})


const myCoding = [
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

myCoding.forEach((name) => {
    console.log(name.languageFileName);
})