## weiblog

### 一、页面设计流程

1. 首页(Twitter)

2. 登录/注册(Tumblr)

3. 信息修改页面

4. 个人主页(微博)(个人主页/相册/关注/粉丝)

### 二、页面功能

##### 1、首页

###### header

1. 关键字搜索-动态获取数据库内容-更改主页信息
2. 消息-跳转(3)（收到的评论/赞，发出的评论/赞）
3. 设置-跳转（修改个人信息(4) / 退出登录(1)）
4. 首页——index
5. 图片——personal_page pic
6. 热门——index hot
7. 话题——index topic

###### nav

1. 动态获取数据库blog内容
2. 





1. 注册登录

2. 个人主页背景图

3. 我的收藏/赞/评论过的微博

4. 赞过的图片

5. 发布微博（可插入 图片/话题）

6. 热门微博/热门图片

7. 修改个人信息

8. 关注用户/粉丝

### 三、数据库结构

Tables: 
1. `wb_user` 用户列表
2. `user_following` 关注列表
3. `user_fans` 粉丝列表
4. `wb_blog` blog列表
5. `wb_img` 图片列表
6. `wb_reply`评论列表

### Tech Stack:

HTML5、JavaScript、CSS、PHP

