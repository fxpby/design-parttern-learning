import Item from './Item.js'

// 工厂函数
export default function (list, itemData) {
  console.log(list, itemData)
  return new Item(list, itemData)
}