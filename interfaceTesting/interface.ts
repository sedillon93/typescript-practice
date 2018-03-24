'use strict';

// defining an object Interface
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    console.log(config.color);
    return;
}

// defining a function Interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySquare = createSquare({ color: "red", width: 100 });