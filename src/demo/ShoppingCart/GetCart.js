// 购物车内存
class Cart {
  constructor() {
    this.list = [];
  }

  add(data) {
    this.list.push(data)
  }

  del(id) {
    const delIndex = this.list.findIndex(x => x.id === id)
    this.list.splice(delIndex, 1)
  }

  getList() {
    return this.list.map(x => x.name)
  }

  getCart() {
    return cartInstance
  }
}

let cartInstance = null

// 返回单例 - 单例模式
const getCart = (() => () => {
  if (!cartInstance) {
    cartInstance = new Cart()
  }
  return cartInstance
})()

export default getCart