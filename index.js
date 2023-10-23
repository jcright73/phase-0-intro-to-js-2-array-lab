// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const appendsCat = [...cats, name];
    return appendsCat;
}

function prependCat(name){
    const prependsCat = [name, ...cats];
    return prependsCat;
}

function removeLastCat() {
    const removesLastCat = cats.slice(0, -1);
    return removesLastCat;
}

function removeFirstCat(){
    const removesFirstCat = cats.slice(1);
    return removesFirstCat;
}