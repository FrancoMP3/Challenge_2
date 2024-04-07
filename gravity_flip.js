const flip = (d, a) => {
    if (d === 'R') {
        a.sort((x, y) => x - y);
    } else if (d === 'L') {
        a.sort((x, y) => y - x);
    }

    return a;
}
