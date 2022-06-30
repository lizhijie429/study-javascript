// 获取数组所有数据的下标
const arr = ['a', 'b', '', 'd', 'e', 'f']

// 只获取有效值索引
const sparseKeys = Object.keys(arr)

console.log('sparseKeys', sparseKeys) // [ '0', '1', '2', '3', '4', '5' ]

// 获取所有值索引
const denseKeys = [...arr.keys()]

console.log('denseKeys', denseKeys) // [ 0, 1, 2, 3, 4, 5 ]

