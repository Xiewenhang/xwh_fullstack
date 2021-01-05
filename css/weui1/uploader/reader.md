# weui里面学习命名风格 腾讯系的套路
 .container + .page 业务惯例
 - containerr wrapper
    z在pc端他负责页面容器的宽度，左右留白
    1200px + margin auto
    在移动端 没有auto这个需要
    position：a + 100% +overflower：hidde
    一屏移动的效果
- page
    良好垂直方向滚动的页面容器
- page_hd page_bd page_ft
    __国际命名规范 BEM __表示
    .page Block 区块
    Element 子元素 __表达
    .page(Block)>.page__hd(Element)>(.page__title+page__desc
        )(Element,BE 不受html结构限制) +.page__bd+page__ft
    .weui-uploader>.weui-uploader__hd+.weiu-uploader__bd
- css 编写顺序
    1.css reset 把浏览器变成一张白纸，为了统一（margin，padding）
    2.业务公用样式 .link .page .container 公用
    3.业务样式 最下面 BEM
        .page>.page__hd