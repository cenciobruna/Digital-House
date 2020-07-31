const teste01 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('a vem primeiro');
    }, 3000)
})

const teste02 = new Promise((resolve, reject) => {
    resolve('b vem depois');
})

teste01.then(function(res) {return console.log(res)})
.then(function() {return teste02})
.then(function(res) {return console.log(res)});


/*function a(n1, n2){
    return n1+n2;
}

console.log(a(1,2));*/