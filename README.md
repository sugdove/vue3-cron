# vue3-cron

![CocoaPods](https://img.shields.io/npm/dt/vue3-cron.svg)
![CocoaPods](https://img.shields.io/npm/v/vue3-cron.svg)


这是一个cron表达式生成插件,基于vue3.0与element-plus实现
[demo](https://githubs.club/demo/)


## 依赖
- Vue 3.0.0+
- elementplus

## 安装方式
```
npm install vue3-cron
```

## 引入方式
```javascript
//前置配置
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
//全局引入
import vue3Cron from 'vue3-cron' 
import 'vue3-cron/lib/vue3Cron.css' // 引入样式
const app = createApp(App)
app.use(ElementPlus).use(vue3Cron).mount('#app') //使用方式：<vue3Cron></vue3Cron>


//局部引入
import { cronExp } from 'vue3-cron'
import 'vue3-cron/lib/vue3Cron.css' // 引入样式
export default {
    template: '<cronExp/>',
    components: { cronExp }
}
```

## 示例
```vue
<template>
  <div class="cron">
    <h1>vue3-cron</h1>
    <el-popover v-model:visible="state.cronPopover" width="700px" trigger="manual">
      <vue3Cron
        @change="changeCron"
        @close="togglePopover(false)"
        i18n="cn"
      ></vue3Cron>
      <template #reference>
        <el-input
          @focus="togglePopover(true)"
          v-model="state.cron"
          placeholder="* * * * * ? *"
        ></el-input>
      </template>
    </el-popover>
  </div>
</template>

<script>
import { reactive,defineComponent, watch } from 'vue'
export default defineComponent ({
  setup(){
    const state = reactive({
      cronPopover: false,
      cron: ''
    })
    const changeCron = (val) => {
      if(typeof(val) !== 'string') return false
      state.cron = val
    }
    const togglePopover = (bol) => {
      state.cronPopover = bol
    }
    
    return {
      state,
      changeCron,
      togglePopover
    }
  }
});
</script>

<style lang="scss" scoped>
.cron {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  h1 {
    font-size: 50px;
    text-align: center;
  }
}
</style>

```

在示例中我使用了es6(es2015)语法,你可能需要引入babel-polyfill才能正常运行,或者你也可以用es5的写法

## 参数

- i18n

    - 参数 `{String} language` 目前仅支持`en|cn`
    
    国际化支持

## 事件
- change(cronText)

    - 参数：`{String} cronText` cron表达式的值
    
    当corn表达式的值发生变化变化时触发
    
- close()

    - 参数：无
    
    当点击corn表达式选择框取消按钮时触发
    
## 联系方式

邮箱 : 849809724@qq.com

有任何问题请发Issues或者邮箱联系我-.-  谢谢!