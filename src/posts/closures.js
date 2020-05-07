// part one

let outside = "fishbowl";

const checkScope = () => {
    let inside = "goldfish";
    console.log(outside);
    console.log(inside);
};

checkScope(); //logs fishbowl and goldfish
