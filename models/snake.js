import { Segment } from './segment.js';
import { Direction } from './direction.js';
import { Point } from './point.js';

export default class Snake {
    constructor() {
        this.segments = [];
        this.segments.push(Snake.createNewSegment(new Point(0, 0), new Point(1, 0), Direction.RIGHT));
    }

    handleDirectionChange(d) {
        createNewSegment(false, pointX, pointY);
    }

    turn(d) {
        var currentDirection = this.segments[0].currentDirection;
        switch (d) {
            case Direction.RIGHT:
                if (currentDirection == Direction.LEFT) {
                    throw Error('Cannot do 180 turn');
                }
                break;
            case Direction.UP:
                if (currentDirection == Direction.DOWN) {
                    throw Error('Cannot do 180 turn');
                }
                break;
            case Direction.LEFT:
                if (currentDirection == Direction.RIGHT) {
                    throw Error('Cannot do 180 turn');
                }
                break;
            case Direction.DOWN:
                if (currentDirection == Direction.UP) {
                    throw Error('Cannot do 180 turn');
                }
                break;
        }
        st = new Point(this.segments[0].x, this.segments[0].y);
        end = new Point(this.segments[0].x, this.segments[0].y);
        this.segments.unshift(Snake.createNewSegment(st, end, d));
    }

    move() {
        this.segments[0].move();
        this.segments[segments.length - 1].move();
    }

    add(d) {
        console.log('called add' + d);
        var _dx = Snake.dx[d];
        var _dy = Snake.dy[d];
        var seg;
        var lastSeg = this.segments[this.segments.length - 1];
        if (lastSeg.currentDirection == d) {
            seg = lastSeg;
        } else {
            lastSeg = Snake.createNewSegment(lastSeg.e.clone(), lastSeg.e.clone(), d);
            this.segments.push(lastSeg);
        }
        lastSeg.e.x += _dx;
        lastSeg.e.y += _dy;
    }

    static createNewSegment(x, y, d) {
        return new Segment(x, y, d);
    }
}

Snake.dx = [1, 0, -1, 0];
Snake.dy = [0, -1, 0, 1];
