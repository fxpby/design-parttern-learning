import getCart from '../ShoppingCart/GetCart.js'
import StateMachine from 'javascript-state-machine'
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
    
    const fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToCart',
          from: '加入购物车',
          to: '从购物车删除'
        },
        { 
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        }
      ],
      methods: {
        // 加入购物车
        onAddToCart: () => {
          this.addToCartHandler()
          updateText()
        },
        // 从购物车删除
        onDeleteFromCart: () => {
          this.deleteFromCartHandler()
          updateText()
        }
      }
    })

    const updateText = () => {
      btn.innerHTML = fsm.state
    }
    btn.onclick = () => {
      // 添加到购物车
      if (fsm.is('加入购物车')) {
        fsm.addToCart()
      // 从购物车移除
      } else if (fsm.is('从购物车删除')) {
        fsm.deleteFromCart()
      }
    }
    updateText()
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