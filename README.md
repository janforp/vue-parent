# vue-parent
vue项目


慕课网：
http://www.imooc.com/learn/694

官网：

https://cn.vuejs.org/v2/api/#v-on

首次
1.安装taobao的 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

2.安装vue-cli
cnpm install -g vue-cli

3.创建项目

vue init webpack + 项目名称

4.下载依赖
cd到项目名称下
cnpm install

##千万注意：
在执行4之前，先在项目中新建 node_modules 目录，右键 Mark as Excluded 
否则在安装这些依赖的时候会导致IDE内存溢出。如果一个文件被标识为 Excluded 状态，则他不会创建索引

5.启动项目
npm run dev


可能会用的：
1.vue-resource
cnpm i vue-resource -S