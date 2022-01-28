function func1() {
    console.log("I am the default");
}

const receivesAFunction = function(callBack=func1()) {
    return callBack();
}

const returnsANamedFunction = function () {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = function() {
    return function(){return "ABC"};
}