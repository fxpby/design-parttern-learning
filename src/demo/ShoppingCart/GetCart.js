// 购物车内存
let cartInstance = null
class Cart {
  constructor() {
    if (!cartInstance) {
      cartInstance = new this()
    }
    cartInstance = this
    this.list = [];
  }

  add(data) {
    this.list.push(data)
  }

  del(id) {
    const delIndex = this.list.findIndex(x => x.id === id)
    delIndex && this.list.splice(delIndex, 1)
  }

  getList() {
    return this.list.map(x => x.name)
  }

  getCart() {
    return this
  }
}

export default Cart.getCart()