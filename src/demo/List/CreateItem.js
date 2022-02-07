import Item from './Item.js'

// 工厂函数 - 工厂模式
export default function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData)
  }
  return new Item(list, itemData)
}

// 代理模式, 感觉这里用有些生硬
const createDiscount = itemData => {
  return new Proxy(itemData, {
    get: (target, key) => {
      if (key === 'name') {
        return `${target[key]}【折扣💰】`
      }
      if (key === 'price') {
        return target[key] * 0.8
      }
      return target[key]
    }
  })
}