# 小程序是明年社区团购电商的核心
- 电商来设计
  明年是电商爆发年
- 小程序由一个个的page购成
  每个page 分成四部份 
  index.js 提供了数据
  index.wxml 提供html的界面
  index.wxss 负责干什么？ 

- 现代界面思想， MVVM  
  数据驱动的界面， 
  ```js
  Page({
    data: {

    }
  })
- setDate 数据驱动界面的内置API
   修改了data中的数据，界面中的{{}}会自动更新