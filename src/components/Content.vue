<template>
	<div class="nav">
		<ul class="clearfix">
	    	<router-link to="/home" tag="li" class="width fl" active-class="active">
	    		首页
	    	</router-link>
	    	<router-link to="/new" tag="li" class="width fl" active-class="active">
	    		关注
	    	</router-link>
	    	<router-link to="/center" tag="li" class="width fr" active-class="active">
	    		栏目
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		//name:'nav'
	}
</script>