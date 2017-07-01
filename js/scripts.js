function drawTree(heigh) {
    for (var i = 0; i <= heigh; i++) {
        var star = '';
        for (var j = 0; j < heigh - i; j++) {
            star += ' ';
        }
        for (var k = 0; k <= i; k++) {
            star += '* ';
        }
    console.log(star);  
    }
}
drawTree(20);
