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
    const appendCat = [...cats, name];
}

function prependCat(name){
    const appendCat = [name, ...cats];
}

function removeLastCat(){
    const removeLastCat = cats.slice(-1);
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
}