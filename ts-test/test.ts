let list1: Array<number> = [1, 2, 3]
let list2: (number | string)[] = [1, '2', 3]
let list3 = [1, 2, ,3]

let list4 = [1, '2', '3']
let list5: any[] = [1, 'b', true]

let person1: [number, string] = [1, 'a']
person1.push(3)


let union2: number | string | string[]
// union2 = true // 报错

let literal: 1 | '2' | [1, 2]
// literal = [1, 2, 3] // 报错

enum Color {
  red,
  blue,
  green
}
console.log('Color', Color, Color.red) // red1

let randomValue: unknown = 666
// randomValue()
// randomValue.toUpperCase()

function printResult (): undefined {
  console.log('lalala')
  return
}

function thorwError (message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  }
}

// let message: any
// message = 'abc'
// message.endsWith('c')

// let ddd = (<string>message).endsWith('c')
// let ddd2 = (message as string).endsWith('c')

let log = (message: string, code?: number, desc: string = '404') => {
  console.log(message, code, desc)
}
log('helloWord')

const person = {
  firstName: 'hello Word',
  lastName: 'gao',
  age: 18
}
console.log(person.hobby) // 报错