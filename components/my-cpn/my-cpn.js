// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"我是",
      observer:(n,o)=>{
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // title:"我是标题"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.triggerEvent("add",{name:"DGJ",age:18},{})
    }
  },
  externalClasses: ["titleclass"]
})
