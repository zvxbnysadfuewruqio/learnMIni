// components/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemclock(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currindex: index
      })
      this.triggerEvent("itemclick",{index,title:this.properties.titles[index]},{})
    }
  }
})
