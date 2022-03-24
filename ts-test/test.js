var list1 = [1, 2, 3];
var list2 = [1, '2', 3];
var list3 = [1, 2, , 3];
var list4 = [1, '2', '3'];
var list5 = [1, 'b', true];
var person1 = [1, 'a'];
person1.push(3);
var union2;
// union2 = true // 报错
var literal;
// literal = [1, 2, 3] // 报错
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
console.log('Color', Color, Color.red); // red1
var randomValue = 666;
// randomValue()
// randomValue.toUpperCase()
function printResult() {
    console.log('lalala');
    return;
}
function thorwError(message, errorCode) {
    throw {
        message: message,
        errorCode: errorCode
    };
}
// let message: any
// message = 'abc'
// message.endsWith('c')
// let ddd = (<string>message).endsWith('c')
// let ddd2 = (message as string).endsWith('c')
var log = function (message, code, desc) {
    if (desc === void 0) { desc = '404'; }
    console.log(message, code, desc);
};
log('helloWord');
