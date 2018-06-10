<template>
	<div class="camp_box">
		<div class="title">
		<ul class="row main-box" @click="hideOn">
			<li class="col-md-3 tc" :class="{on:isActive}">
				<router-link to="/camp/web" class="display_b">
				前端杂记</router-link>
			</li>
			<li class="col-md-3 tc">
				<router-link to="/camp/exp" class="display_b">
				快乐练习</router-link>
			</li>
			<li class="col-md-3 tc">
				<router-link to="/camp/hobby" class="display_b">
				个人爱好展示</router-link>
			</li>
			<li class="col-md-3 tc">
				<router-link to="/camp/h5" class="display_b">
				h5新特性笔记</router-link>
			</li>
		</ul>
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				isActive:true
			}
		},
		methods:{
			hideOn(){
				this.isActive=false
			}
		}
	}
</script>
<style type="stylesheet/less" lang='less' scoped>
	.camp_box{
		.title{
			background:#f3f3f3;
			li{
			height: 40px;
		    line-height: 40px;
		    font-size: 14px;
		    padding:0;
		    &.on a{
		    	border-color:#357075;
		    	 border-bottom-color:transparent;
		    }
		    a{
		    border:1px solid transparent;
		     border-bottom-color:#357075;
		     &.router-link-exact-active.router-link-active{
		    	border:1px solid transparent;
		    	border-color:#357075;
		    	border-bottom-color:transparent;
		    	}
		    	}
			}
			
		}
	}
</style>
