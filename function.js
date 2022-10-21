// function default parameter for not provided values
function add(num1, num2 = 23) {
    // option 1
    // num2 = num2 || 0;
    // option 2
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(10);
console.log(result)