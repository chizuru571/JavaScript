try {
    let random = Math.floor(Math.random() * 5);
    console.log(random);
    switch (random) {
        case 0:
            throw new Error();
        case 1:
            throw new SyntaxError();
        case 2:
            throw new TypeError();
        case 3:
            throw new RangeError();
        case 4:
            throw new URIError();
    }
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log('例外 SyntaxError');
    } else if (e instanceof TypeError) {
        console.log('例外 TypeError');
    } else if (e instanceof RangeError) {
        console.log('例外 RangeError');
    } else if (e instanceof URIError) {
        console.log('例外 URIError');
    } else if (e instanceof Error) {
        console.log('例外 Error');
    }
}