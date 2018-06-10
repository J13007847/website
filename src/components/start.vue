<template>
<div class="Home_comtent" :class="{on:isActive}">
	<div class="header" :class="{on:isActive}">
		<div class="header-content col-md-11 col-sm-11 col-sx-11">
			<div class="headshot" :class="{on:isActive}" @click="hide">
				<router-link class="navigator" to="/" >
				<img src="/img/m.jpg" alt="头像">
			</router-link>
			</div>
			<div class="nav" :class="{on:isActive}">
				<span class="glyphicon glyphicon-list" :class="{on:isActive}" @click="showMemu"></span>
				<ul class="tc col-md-12 row" @click="showcontent"   :class="{active:memu}">
					<li class="float-left col-md-3 col-xs-6" >
						<!-- <div class="navigator"  > -->
						<router-link class="navigator" to="/home" >
						<span class="display_b">主页</span>
						<span class="en-txt">HOME</span>
						</router-link>
					</li>
					<li class="float-left col-md-3 col-xs-6">
						<router-link class="navigator" to="/pro">
						<span class="display_b">作品</span>
						<span class="en-txt">PRODUCTION</span>
						</router-link>
					</li>
					<li class="float-left col-md-3 col-xs-6">
						<router-link class="navigator" to="/camp">
						<span class="display_b">集中营</span>
						<span class="en-txt">CAMP</span>
						</router-link>
					</li>
					<li class="float-left col-md-3 col-xs-6">
						<router-link class="navigator" to="/contact">
						<span class="display_b">给我留言</span>
						<span class="en-txt">CONTACT ME</span>
						</router-link>
					</li>
				</ul>
			</div>
			<p class="incentive tc">DONT'T LOST YOURSELF</p>
			<div class="boundary tc">
				<span class="display_in col-md-3 col-xs-1"></span>
				<p >Never forget why you started</p>
				<span class="display_in col-md-3 col-xs-1"></span>
			</div>
			<div class="btn_g">
				<router-link to="/home" >
				<p @click="showcontent" class="navigator display_b tc"><span class="glyphicon glyphicon-menu-down"></span></p>
				</router-link>
			</div>
		</div>
		</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				isActive:false,
				memu:false
			}
			
		},
		mounted(){
			const url=String(window.location.href).split("/")[3];
			if(url==="home"||url==="pro"||url==="camp"||url==="contact"){
				this.isActive=true;
			}else{
				this.isActive=false;
			}
		},
		methods:{
			showcontent(){
				this.isActive=true;
			},
			hide(){this.isActive=false;},
			showMemu(){this.memu=!this.memu}
		}
	}
</script>
<style type="stylesheet/less" lang='less' scoped>
.height(@hb,@fb,@ib){
    height:100px*@hb;
   font-size: 10px*@fb;
   line-height: 10px*@ib;
   transition: height 0.5s
}
.Home_comtent.on{background:#000}
.header{
	color:#fff;
	padding-bottom:20px;
	 background:#357075;
	overflow:hidden;
	&.on{
		height:75px;
		overflow: visible;
		padding-bottom:10px;
		.header-content{
		.headshot{
			float:left;
			width:60px;
			height:60px;
			line-height:60px;
			margin-top:0;
			padding:5px 0 0;
			img{
				height:auto;
			}
		}
		.nav{
			float:right;
			height:60px;
			width:50%;
			ul{
				flex:0 0 90%;
				margin:15px auto 10px 
			}
			.navigator{
				.height(0.46,1.4,2);
				&:hover{
				    background:transparent;
				    color:#f00;
				    margin-top:0;
				    box-shadow:none;
				    color: #f00;
					}
			}
		}
		.incentive,.boundary,.btn_g{display:none;}
	}
	}
	.header-content{
		float:none;
		margin:0 auto;
		.headshot{
			width:100%;
			.height(2.3,0,23);
			text-align: center;
			padding:20px 0 3%;
			box-sizing: border-box;
				img{
					border-radius:100%;
					display: inline-block;
					max-width:100%;
					height:100%;
				}
			}
		.nav{
			span.glyphicon{
				display:none
			}
				li .navigator{
					color:#fff;
					cursor: pointer;
					border-radius: 5px;
					.height(0.9,2.6,3.4);
					transition: all .3s;
					width:100%;
					display: flex;
				    justify-content: center;
				    flex-flow: column;
				    &.router-link-active{color: #ffffff;border: 1px solid #d8dce6;font-weight:700;}
					&:hover{
				    background:#f1f1f1;
				    box-shadow: inset 0px 0px 8px #616161;
				    margin-top: -5px;
				    color: #136d27;
					}
				}

		}
		.incentive{
			font-weight: bold;
			.height(1.5,7,15);
		}
		.boundary{display: flex;
			.height(0.7,2,7);
			justify-content: center;
			span{
				border-bottom:1px solid #fff;
				margin-bottom: 34px;
			}
			p{
				font-size:20px;
				margin: 0 25px 0;
			}
		}
		.btn_g{
			background:#50c3af;
			.height(0.5,2,5);
			margin:2% auto;
			border-radius: 20px;
			padding:0;
			width:35%;
			overflow: hidden;
			a{
				color:#fff;
			&:hover{
				 background:#f1f1f1;
				 box-shadow: inset 0px 0px 8px #616161;
				 color:#000;
			}
			}
		}
	}
}
@media (max-width:776px){
	div.header{
		&.on{
			height:50px;
			.header-content{
			.headshot{
				width:40px;
				height:40px;
			}
			.nav{
			 	&.on{
			 		ul{
			 			position:absolute;
			 			background:#357075;
			 			z-index:10;
			 			width: 45%;
					    padding: 0;
					    right: 0;
					    margin: 0;
					    top: 50px;
						overflow:hidden;
						display:none;
						&.active{
							display:block;
						}

			 		}
			 		li.col-xs-6 {
			 		margin-bottom:10px;
			 		width:100%;
			 		.navigator{
					font-size:1.4rem;
					line-height:24px;
					}

				}
			}
		}
		.boundary,.incentive{display:none}

		}
	}
		.header-content{
			 .nav{
			 	li .navigator{
					font-size:1.6rem;
				}
				span.glyphicon{
					display:block;
					font-size:28px;
					float: right;
    				margin-top: 11px;
				}

			 }

		}
		
	}
}
</style>
