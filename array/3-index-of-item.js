// 获取指定（c）元素的下标
const arr = ['a', 'b', 'c', 'd', 'e', 'f']

// 使用Array原型链上提供的方法，
// 1、Array.prototype.forEach()
// forEach() 方法对数组的每个元素执行一次给定的函数。
let itemIndex1 = -1
arr.forEach((item, index) => (item === 'c' ? (itemIndex1 = index) : null))
console.log('itemIndex1', itemIndex1)

// 2、Array.prototype.findIndex()
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
let itemIndex2 = arr.findIndex(item => item === 'c')
console.log('itemIndex2', itemIndex2)

// 3、Array.prototype.indexOf()
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
let itemIndex3 = arr.indexOf('c')
console.log('itemIndex3', itemIndex3)

// 4、使用for循环遍历
let itemIndex4 = -1
for (let index = 0; index < arr.length; index++) {
  const element = arr[index]
  if (element === 'c') {
    itemIndex4 = index
    break
  }
}
console.log('itemIndex4', itemIndex4)

// 5、需注意forIn得到的下标是一个字符串类型的
let itemIndex5 = -1
for (const key in arr) {
  if (Object.hasOwnProperty.call(arr, key)) {
    const element = arr[key]
    if (element === 'c') {
      itemIndex5 = key
      break
    }
  }
}
console.log('itemIndex5', itemIndex5)

// forOf循环的是数组对象，并不能直接得到下标
for (const item of arr) {
  console.log('item', item)
}
