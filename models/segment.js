import { Point } from './point.js';
import { Direction } from './direction.js';

export class Segment {
    constructor(s, e, currentDirection){
        this.s = s;
        this.e = e;
        this.currentDirection = currentDirection;
    }

    move() {
        switch (currentDirection) {
            case Direction.RIGHT:
                s.x += 1
                break;
            case Direction.LEFT:
                s.x -= 1
                break;
            case Direction.UP:
                s.y += 1
                break;
            case Direction.DOWN:
                s.y -= 1
                break;
        }
    }
}
