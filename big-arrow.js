const sorol = (num1, num2, num3) => num1 / num2 + num3 * num1;
const sorolResult = sorol(2, 3, 4);

const gon = one => one * 5;
const result = gon(20);

const getName = () => 'robin';
const name = getName();

const doMath = (x, y) => {
    const add = x + y;
    const sub = x - y;
    const mul = add * sub;
    const result = mul * 2;
    return result;
}
const total = doMath(32, 17);
console.log(total);
console.log(name);
console.log(result);
console.log(sorolResult);