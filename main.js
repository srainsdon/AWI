var srcList = $('a').map(function() {
    return this.href;
}).get();
console.log("Link List:\n" + srcList);
