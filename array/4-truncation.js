// 截断数组分为：
// 1、截取开始位置到某一位置的内容；
// 2、截取中间某一段内容；
// 3、截取从某个位置开始以后的内容；

// 一、截取开始位置到下标为3的内容
console.log('------------截取开始位置到下标为3的内容------------')
// 1.1 循环判断索引，获取满足条件的元素
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
const newArr1 = []
arr1.forEach((item, index) => index < 3 && newArr1.push(item))
console.log('截取下标为0到3的内容', newArr1)

// 1.2、Array.prototype.slice()
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
const newArr2 = arr2.splice(0, 3)
console.log('截取下标为0到3的内容', newArr2)

// 1.3、Array.prototype.filter()
// filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
const arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
const newArr3 = arr3.filter((item, index) => index < 3)
console.log('截取下标为0到3的内容', newArr3)

// 二、截取下标从3到5内容
console.log('------------截取下标从3到5内容------------')
// 2.1 循环判断索引，获取满足条件的元素
const arr4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const newArr4 = []
arr4.forEach((item, index) => index <= 5 && index >= 3 && newArr4.push(item))
console.log('截取下标为3到5的内容', newArr4)

// 2.2、Array.prototype.slice()
// 从下标第三个开始截取3个（下标为3、4、5的内容）
const arr5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const newArr5 = arr5.splice(3, 3)
console.log('截取下标为3到5的内容', newArr5)

// 2.3、Array.prototype.filter()
// filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
const arr6 = ['a', 'b', 'c', 'd', 'e', 'f']
const newArr6 = arr6.filter((item, index) => index <= 5 && index >= 3)
console.log('截取下标为3到5的内容', newArr6)
