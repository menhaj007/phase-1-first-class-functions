function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    let name = function() {

    }
    return name;
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}