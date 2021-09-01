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
  name: "App",
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
