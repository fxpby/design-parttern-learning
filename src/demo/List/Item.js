import getCart from '../ShoppingCart/GetCart.js'

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = document.createElement("DIV")
    this.cart = getCart && getCart()
    console.log(this.cart)
  }

  initContent() {
    const $el = this.$el
    const data = this.data
    const nameDom = document.createElement("P")
    nameDom.innerHTML = `名称：${data.name}`
    const priceDom = document.createElement("P")
    priceDom.innerHTML = `价格：${data.price}`
    $el.append(nameDom)
    $el.append(priceDom)
  }

  initBtn() {
    const $el = this.$el
    const btn = document.createElement("BUTTON")
    btn.innerHTML = 'test'
    btn.onclick = () => {
      // 添加到购物车
      // 从购物车移除
    }

    $el.append(btn)
  }

  addToCartHandler() {
    this.cart.add(this.data)
  }

  deleteFromCartHandler() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}