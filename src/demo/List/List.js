import goodsData from './../data.json'
import createItem from './CreateItem.js'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = document.createElement("DIV")
  }

  // 获取数据
  loadData() {
    return new Promise(resolve => {
      resolve(goodsData)
    })
  }

  // 生成列表
  initItemList(data) {
    data.map(itemData => {
      const item = createItem(this, itemData)
      item.init()
      return item
    })
  }

  // 渲染
  render() {
    this.app.$el.append(this.$el)
  }

  async init() {
    const data = await this.loadData()
    this.initItemList(data)
    this.render()
  }
}