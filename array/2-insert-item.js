// 插入元素分为：在初始位置插入，在结束位置插入，在中间任意位置插入
// 核心是需要获取插入元素的位置的下标
let arr = ['d', 'e']

// 一、数组开始位置插入元素a
// 1.1、Array.prototype.unshift()
// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度（该方法修改原有数组）。
arr.unshift('b')
console.log('开始位置插入b元素', arr)

// 1.1、Array.prototype.splice()
// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组
// splice接收多个参数，分别是索引，要删除的元素个数，新加的元素(可多个，用逗号隔开)；
arr.splice(0, 0, 'a')
console.log('开始位置插入a元素', arr)

// 二、在指定位置插入b元素跟d元素之间插入c元素
// 2.1、Array.prototype.splice()
const index = arr.findIndex(item => item === 'b')
arr.splice(index + 1, 0, 'c')
console.log('指定位置插入c元素', arr)

// 三、数组结尾位置插入元素f
// 3.1、Array.prototype.push()
// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
arr.push('f')
console.log('末尾位置插入f元素', arr)

// 3.2、Array.prototype.splice()
arr.splice(arr.length, 0, 'g')
console.log('末尾位置插入g元素', arr)

// 3.3、Array.prototype.concat()
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
arr = arr.concat(['h'])
console.log('末尾位置插入h元素', arr)

// 3.4、解构运算符
arr = [...arr, 'i']
console.log('末尾位置插入i元素', arr)
