// components/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggle(event) {
      console.log(event);
      var index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('toggleTab', {index, title: event.currentTarget.dataset.title}, {})
    }
  }
})
