var srcList = $('a').map(function() {
    return this.src;
}).get();
console.log(srcList);
