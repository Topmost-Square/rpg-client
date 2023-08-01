export const withGrid = (n) => {
    return n * 16
}

export const asGridCoordinate = (x,y) => {
    return `${x*16},${y*16}`;
}

export const nextPosition = (initX, initY, direction) => {
    let x = initX;
    let y = initY;

    const size = 16;

    if (direction === 'left') {
        return {x: x-size,y};
    }
    if (direction === 'right') {
        return {x: x+size,y};
    }
    if (direction === 'up') {
        return {y: y-size,x};
    }
    if (direction === 'down') {
        return {y: y+size,x};
    }

    return {x,y};
}

export const emitEvent = (name, detail) => {
    const event = new CustomEvent(name, {
        detail
    });
    document.dispatchEvent(event);
}