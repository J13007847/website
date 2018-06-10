<template>
	<div class="pro_box">
		<div class="main-box row" id='main'>
			<div v-for="(item,index) in proList" :key="item.id"  :class="{col6:!item[1]}">
			<h2 class="tl">
				<span></span>{{index}}
			</h2>
			<ul class=" row liParent" >
				<li class="col-md-6" v-for="list in item" :key="list.id">
					<img :src="list.img" :alt="list.title" class="display_b title-img">
					<p>
						<span>{{list.des}}</span>
					<a :href="list.href" class="display_b tl">Get It→</a>

					</p>
				</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
			proList:[],
			isTwo:false
		}},
		mounted(){
			
		},
		created(){
			this.fetchDate();

		},
		methods:{
			fetchDate(){
				var _this=this;
				_this.$http.get('src/data/pro_list.json').then(function(res){
						_this.proList=res.data;
						console.log(res.data.goods)
				}).catch(function(err){
					console.log(err)
				})
			}
		}

	}
</script>
<style rel="stylesheet/less" lang='less' scoped>
	.pro_box{
		min-height:1000px;
		background: -webkit-linear-gradient(bottom, #043343 ,#000); 
		  background: -o-linear-gradient(bottom, #043343,#000); 
		  background: -moz-linear-gradient(bottom, #043343,#000); 
		  background: linear-gradient(to bottom, #043343 ,#000); 
  		padding-top:30px;
  		.main-box{
  			.col6{
  				width: 50%;
  				float:left;
    			&:last-child{
    				float:right;
    			}
    			li{
    				width: 100%;
    			}
  			}
			h2{
				color:#fff;
				height:70px;
				line-height: 70px;
				font-size: 28px;
				margin-bottom: 15px;
				span{
					border-left:4px solid #f00;
					padding-right:10px;
					}
				}
			.col-md-6{
				color:#000;
				font-size:18px;
				margin:10px 0;
				line-height: 36px;
				.title-img,p{
						width:95%;
						margin:0 auto 3px;
						position:relative;
					}
				p{
					background:#fff;
					padding:5px;
					height:240px;
					a{
					position:absolute;
					bottom:10px;
					left:10px;

					}

				}
			}
  		
		} 
	}
@media (max-width:789px){
	.pro_box{
		padding-top:10px;
		.main-box{
			.row{
				padding:0 8px;
			}
			h2{
				font-size:1.8rem;
				padding-left:15px;
				height:30px;
				line-height:30px;
				margin-bottom:0;
			}
			ul.row{
				display:flex;
				.col-md-6{
				flex:1;
				padding:0 3px;
				font-size:1.2rem;
				line-height:24px;
				p{
					span{
					display: -webkit-box;
				    -webkit-line-clamp:8;
				    -webkit-box-orient: vertical;
				    height:190px;
				    overflow: hidden;
					}
					
				}
				}
			}
			.col6{
				width:49%;
					h2{
						font-size:1.4rem;
					}
					&:last-child{
						float:right;
					}
				}
			
		}
	}
}
</style>