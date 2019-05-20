//Hang nay ngua mat nen bo
var score = 0;
var count = 1;
var block = 30;
var position = [];

$(document).ready(function() {

    function getRandomInt(min, max) {
        min = Math.floor(min / block);
        max = Math.floor(max / block);
        return (Math.floor(Math.random() * (max - min)) + min) * block;
    }

    function checkPosition(number) {
        for (var i = 0; i < position.length; i++) {
            if (number.x === position[i].x && number.y === position[i].y) return 0;
        }
        return 1;
    }

    function setup() {
        for (var i = 1; i <= 100; i++) {
            var x = getRandomInt(0, 1200);
            var y = getRandomInt(0, 800);
            var curNumberPosition = { x: x, y: y};
            while(checkPosition(curNumberPosition) === 0) {
                x = getRandomInt(0, 1200);
                y = getRandomInt(0, 800);
                curNumberPosition = { x: x, y: y};
            }
            position.push(curNumberPosition);
            $('#game-board').append(`<div class="number" style="left:${x}px; top:${y}px">${i}</div>`);
        }
    }

    setup();

    $('.number').click(function () {
        var clickedNumber = ~~$(this).text();
        if (clickedNumber === count) {
            score++;
            count++;
            console.log(score);
            $(this).css('background-color', 'pink');
        }
    });

    setTimeout(function() {
        alert('YOUR SCORE: ' + score);
        location.reload();
    }, 10000);
});