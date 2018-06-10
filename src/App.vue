<template>
  <div id="app">
  	<Start></Start>
    <router-view></router-view>
  </div>
</template>

<script>
import Start from './components/start.vue'
export default {
  name: 'app',
  components:{
  	Start
  }
  
}
</script>
