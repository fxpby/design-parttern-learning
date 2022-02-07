import getCart from '../ShoppingCart/GetCart.js'

export default class ShoppingCart {
  constructor(app) {
    this.app = app
    this.$el = document.createElement('div')
    this.cart = getCart && getCart()
  }

  initBtn() {
    const btnDom = document.createElement('button')
    btnDom.innerHTML = '购物车'
    btnDom.onclick = () => {
      this.showCart()
    }
    this.$el.append(btnDom)
  }

  showCart() {
    console.log(this.cart.getList())
  }

  render() {
    this.app.$el.append(this.$el)
  }

  init() {
    this.initBtn()
    this.render()
  }
}