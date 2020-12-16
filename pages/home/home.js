Page({
  data: {
    info: {
      name: 'mal',
      age: 22,
      gender: 'male'
    },
    counter: 0
  },

  /* 处理加减函数 */ 
  handleDecrement() {
    this.setData({
      counter: this.data.counter + 1
    })
    console.log(this.data.counter);
  },
  handleIncrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})