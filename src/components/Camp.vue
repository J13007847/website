<template>
	<div id="camp">
	<List></List>
	<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import List from './campList.vue'
export default {
  name: 'camp',
  components:{
  	List
  }
  
}

</script>
<style type="stylesheet/less" lang='less' scoped>
	#camp{
		background: linear-gradient(bottom, #357075, #fff);
		background: -webkit-linear-gradient(bottom, #357075, #fff);
		background: -o-linear-gradient(bottom, #357075, #fff);
		background: -moz-linear-gradient(bottom, #357075, #fff);
	}
</style>