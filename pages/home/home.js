// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showData: ['one', 'two', 'three']
  },

  handleTap() {
    console.log('bind:tap');
  },

  handleTouchstart() {
    console.log('bind: touchstart');
  },

  handleTouchend() {
    console.log('bind: touchend');
  },

  handleLongpress() {
    console.log('bind: longpress');
  },

  handleTouchmove() {
    console.log('bind: touchmove');
  },

  // 介绍事件对象
  handleEventObj(event) {
    console.log('事件对象', event);
  },

  handleOutertap(event) {
    console.log(event);
  },

  handleInnertap(event) {
    console.log(event);
  },

  /* 事件参数传递 */ 
  handlePassonOptions(event) {
    console.log(event);
    const dataset = event.target.dataset
    console.log(dataset);
  },

  handleCaptureModule1() {
    console.log('handleCaptureModule1');
  },
  handleBindModule1() {
    console.log('handleBindModule1');
  },
  handleCaptureModule2() {
    console.log('handleCaptureModule2');
  },
  handleBindModule2() {
    console.log('handleBindModule2');
  },
  handleCaptureModule3() {
    console.log('handleCaptureModule3');
  },
  handleBindModule3() {
    console.log('handleBindModule3');
  }

})