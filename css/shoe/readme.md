# 电商是2021永远的主题

    1. 得物app  目的
        新的细分领域的电商在上市过程中
    - 得到 知识电商、
    - 得物 潮牌电商
        群体 25以下的 潮牌群体 talk
        阿里电商和腾讯电商  互联网关系链
        平多多 /  京东
    2. 功能细分 商品卡片的设计
        - 难点是半圆 -> 更大半径的圆。圆的中心会改变 ？
        - 鞋
            两个运动  向上 转角 用animation。
        - 文字部分
            opactio 0-1
            container；
        - 良好的结构
            不要想样式，要毛坯
            .dw 项目代号 是项目不是简单地页面
            .container ?居中五种方法
                容器 设置一个宽度+margin auto
                定位  position
                弹性布局  水平居中
        - stylus 用法
            前段都有着这么多命令行
            stylus -w *.styl -o *.css
            -o *.css 监听
            -w *styl 向外输出样式
            1.用tap缩进
            2.嵌套的css
             .dw_card
              &:hover
              .dw_card__imgBx
            .dw_card .dw_card__imgBx{}
            &代表不是下级，是引用上级