const WIDTH = 5;

// data is supposed to have :
// dx, dy: which is num_blocks. Negative for left and up movement.
// top, left : the ending point of last segment. This is where rendering should begin.
function render(data) {
    // Create an array of blocks to use handlebars.
    var length = Math.abs(data.dx || data.dy);
    var blocks = [];
    blocks = Array.from({length : length}, (v, i) => 0);
    // Calcuate the top and left points to position the segment in absolute.
    var topPoint = data.top * WIDTH;
    var leftPoint = data.left * WIDTH;
    // In case direction is left, move the cursor to actual end.
    // This is how flex works. dx will be negative here.
    if (data.direction == 'left') {
        leftPoint += (data.dx + 1) * WIDTH;
    }
    // Similarly when you want to go up which is reverse column.
    // dy will be negative here hence just put the top point where
    // the snake ends.
    if (data.direction == 'up') {
        topPoint += (data.dy + 1) * WIDTH;
    }
    // Finally set the inner HTML.
    document.getElementById('snake').innerHTML +=
        Handlebars.templates.segment_block({
            block: blocks,
            direction: data.direction,
            top: topPoint,
            left: leftPoint
        });
}

function renderSnake(s) {
    console.log(s);
    var startX, startY;
    for (var t = 0 ; t < s.segments.length; t++) {
        var segment = s.segments[t];
        // Define the start for rendering.
        startX = startX == null ? segment.s.x : startX;
        startY = startY == null ? segment.s.y : startY; 
        var dx = segment.e.x - segment.s.x;
        var dy = segment.e.y - segment.s.y;
        var data = {
            dx: dx,
            dy: dy
        };
        switch (segment.currentDirection) {
            case 0:
                data.direction = 'right';
                break;
            case 1:
                // TOP.
                data.direction = 'up';
                break;
            case 2:
                // LEFT.
                data.direction = 'left';
                break;
            case 3:
                // DOWN.
                data.direction = 'down';
                break;
        }
        data.top = startY;
        data.left = startX;
        render(data);
        startX += data.dx;
        startY += data.dy;
    }
}
