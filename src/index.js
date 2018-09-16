module.exports = function solveEquation(equation) {
    let abc = equation.match(/(-|- )?\d+/g);
    let a = parseInt(abc[0].replace(' ',''));
    let b = parseInt(abc[2].replace(' ',''));
    let c = parseInt(abc[3].replace(' ',''));
    let d = Math.pow(b,2) - 4 * a * c;
    let x1 = Math.round((-1*b + Math.sqrt(d))/(2*a));
    let x2 = Math.round((-1*b - Math.sqrt(d))/(2*a));
    return [x1,x2].sort((left, right)=> left > right);
};
