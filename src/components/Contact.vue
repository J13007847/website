<template>
	<div class="contact_box">
		<div class="main-box">
			<p class="title tc">留言</p>
			<div class="ly_box row">
				<textarea v-model="contact" id="text" class="whrite_box" placeholder="来说一两句吧.....">
					
				</textarea>
				<span class="err_txt tc display_in" v-show="err">评价内容为空</span>
				<p @click="submitLy" class="btn">
					留言一下
				</p>
		</div>
		<div class="show_box">
			<p class="show-title tc">
				评论区
			</p>
			<div class="show_content">
				<h4>热门评论</h4>
				<p v-show="arr0" class="arr0_txt tc">
					偷偷告诉你，这还什么都没有 T T
				</p>
				<ul v-show="!arr0">
					<li v-for="item in conList">
						<p class="row">
							<span class="pull-right"> {{item.Time}}</span>
						</p>
						<p class="text row">
							<span class="user col-md-2 tc"> ID为{{item.id}}的用户</span>
							<span class=" col-md-9">
								{{item.text}}
							</span>
						</p>
						<p class="row">
							<span class="pull-right glyphicon glyphicon-thumbs-down">0</span>
							<span class="pull-right glyphicon glyphicon-thumbs-up">0</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				contact:'',
				conList:[],
				arr0:false,
				err:false,
				id:1
			}
		},
		methods:{
			submitLy(){
				var re=/卧槽|我日|黄色|上床|约一炮|一炮|我操|我草|教会|法轮功|违法|我擦|woca|wocha|沃日/g;
				if(this.contact==''){
					this.err=true;
					document.getElementById("text").focus();
				}
				else if(re.test(this.contact)){
					alert("有敏感词汇，请文明用语,谢谢");
					document.getElementById("text").focus();
				}
				else{
					var time=new Date();
					var fullTime=time.getFullYear()+"年"+time.getMonth()+"月"+time.getDate()+"日"+time.toLocaleTimeString();
					this.conList.push({id:this.id++,text:this.contact,Time:fullTime});
					this.arr0=false;
					this.contact='';
					this.setCookie();
				}
			},
			setCookie(){
		        var oDate = new Date();
		        oDate.setHours(oDate.getHours() + 1);
		        document.cookie = "ly=1;expires=" + oDate;
}
		},
		created(){
				if(this.conList.length==0){
					this.arr0=true;
				}
			}
	}
</script>
<style type="stylesheet/less" lang='less' scoped>
	.contact_box{
		background:#fff;
		padding-top:60px;
		position:relative;
		.title{
			color:#fb6b54;
			border:1px solid #fb6b54;
			border-bottom-color:transparent;
			border-radius:100%;
			background:#fff;
			width:40px;
			height:88px;
			line-height:88px;
			position:absolute;
			top:40px;

		}
		.err_txt{
			margin-top: 25px;
		    color: #f00;
		    font-size: 16px;
		    margin-left: 55px;
		}
		.whrite_box{
			height:180px;
			border:1px solid #fb6b54;
			font-size:16px;
			padding:25px;
			border-radius:10px;
			outline:none;
			overflow-x: hidden;
    		overflow-y: auto;
			width:100%;
			margin-top:48px;
		}
		.btn{
			background:#f00;
			color:#fff;
			height:50px;
			line-height:40px;
			font-size:20px;
			text-align:center;
			width:252px;
			border-radius:5px;
			float:right;
			margin:50px 10px 40px 0;
		}
		.show_box{
			border-top:1px solid #fb6b54;
			padding-top:10px;
			position:relative;
			.show-title{
				border:1px solid #fb6b54;
				border-bottom-color:transparent;
				color:#fb6b54;
				width:60px;
				height:30px;
				line-height:30px;
				position:absolute;
				top:-30px;
				background:#fff;
				border-top-left-radius:10px;
				border-top-right-radius:10px;
			}
			.show_content{
				 h4{
					border-left:2px solid #fb6b54;
					padding-left:10px;
					color:#fb6b54;
					font-size:16px;
					margin:10px 0;
				}
				.arr0_txt{
					font-size:14px;
					color:#bbb;
					padding:100px 10px 10px;
					width:100%;
					height:200px;

				}
				li{
					border-bottom:1px solid #ccc;
					padding-bottom:10px;
					padding-left:20px;
					margin-bottom:10px;
					.row{
						color:#bbb;
						font-size:14px;
						height:40px;
						line-height:40px;
						.glyphicon{
							font-size:18px;
							padding:5px ;
						}
						
					}
					.text{
						color:#3c3b3b;
						line-height:32px;
						height:66px;
						overflow-y:auto;
						.user{
							font-size:16px;
							margin-right:10px;
							padding:5px;
						    background: #efeaea;
						    border-radius: 10px;
						}
					}
				}
			}
		}

	}
	@media (main-box:789px){

	}
</style>
