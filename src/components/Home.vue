<template>
	<div class="content">
		<div class="floor01">
			<div class="main-box">
			<h2 class="tc">关于我</h2>
			<p class="col-md-11 tc">
			<span class="display_b animated fadeInUp">我叫肖俊，现居在杭州江干区</span>
			<span class="display_b animated fadeInUp">虽然我不是计算机专业，但对前端很感兴趣，所以自学前端，喜欢代码呈现的界面;</span>
			<span class="display_b animated fadeInUp">有一年多的工作经验，在公司负责网站的整体维护以及更新；</span>
			<span class="display_b animated fadeInUp">对以后的规划也是打算一直走前端这条路，虽说现在是初级前端，但我相信我以后能成为高级前端人员；</span>
			<span class="display_b animated fadeInUp">本人性格温和，不浮不燥，自我调节能力不错，能较好的吸收新的知识，且能运用到项目中</span>
			</p>
			</div>
		</div>
		<div class="floor02">
			<div class="main-box">
			<h2 class="tc">技能掌握</h2>
			<canvas id="myChart"></canvas>
			<p class="col-md-11">
			<span>熟练HTML、CSS、JavaScript、PS切图四种前端必备的基础技能，熟悉W3C标准，能熟练运用HTML5，CSS3及其新特性编写页面，顾忌浏览器兼容性。具备一定的前端性能优化经验；</span>
			<span>熟练使用jQuery框架和某些依赖于jQuery框架的插件。</span>
			<span>熟悉AJAX，了解JSON，并对javaScript代码的可读性和执行效率有追求；</span>
			<span>熟悉主流的UI组件。</span>
			<span>熟悉vue,less;对webpack、node有所认识了解;</span>
			<span>熟悉Apache服务器、MySQL数据库、PHP等后台开发，可简单编写PHP动态页面。</span>
			<span>熟悉微信小程序开发；</span>
			<span>熟练使用Photoshop</span>
			</p>
		</div>
		</div>
		<div class="floor03">
			<div class="main-box">
			<h2 class="tc">工作经验</h2>
			<ul class="row">
				<li class="col col-md-6 col-xs-12 col-ms-12">
					<p class="tc img_box">
					<img src="/img/g01.jpg" alt="杭州万通汽车教育"></p>
					<p class="col-md-11">
					在公司中负责网站的开发包括pc端和手机端以及后期的更新；负责服务器的购买和配置，后期的环境配置和维护；负责根据竞价人员要求，写后台接口(语言：php)，以及后台数据的搭建和更新维护，优化前端，提交seo的收录；根据熊掌号对网站做优化，提高搜索界面的呈现。
					</p>
				</li>
				<li class="col add_li  col-md-6 col-xs-12 col-ms-12">
					<img src="/img/add.jpg" alt="添加">
				</li>
			</ul>
		</div>
		</div>
		<div class="floor04">
			<div class="main-box">
				<div class="top">
			<h2 class="tc">项目经验</h2>
			<router-link class="navigator" to="/pro">
			更多>>
			</router-link>
			</div>
			
			<ul class="row">
				<li class="col col-md-4" v-for="item in proList" :key="item.id">

					<img :src="item.img">
					<p class="title">
						{{item.title}}
					</p>
					<p class="description">
						{{item.des}}
					</p>
					<a :href="item.href" class="display_b tl">Get It →</a>
				</li>
			</ul>
			<router-link class="footer_a navigator tc" to="/pro">
			更多项目>>
			</router-link>
		</div>
		</div>
		<div class="floor05">
			<div class="main-box">
			<h2 class="tc">可联系我</h2>
			<div class="email_box">
				<div class="col">
					<input type="text" id="name" name="title" placeholder="title(输入您的标题)" class="display_b col-md-12" v-model="title" required="">
					<input type="text" id="add" name="add" placeholder="your add(你的QQemail地址)" class="display_b col-md-12" v-model="add">
					<textarea type="text" id="con" name="con" placeholder="content(内容)" class="display_b col-md-12" v-model="con">
					</textarea>	
					<p>
						<label  @click="toggle" :class="{active:check}"><input type="checkbox" checked="checked" :class="{active:check}">发送到我的email</label>
						<input type="button" @click="submit" value="发送" class="pull-right col-md-4 tc">
					</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script type="text/javascript">
import Chart from "Chart.js";
// var mail = require("../data/mail"); 
	export default{
		data(){
			return {
				check:true,
				isOn:false,
				title:"",
				add:'',
				con:"",
				url:"http://www.xgrwz.com/sendmail/cs.php",
				proList:[
					{
						"title":"杭州万通汽车教育官网",
						"img":"/img/x01.jpg",
						"des":"根据集团下发的模板进行二次开发，取长补短，开发成适合本院校的网站，并结合织梦CMS进行组合开发，根据织梦的使用规则，对页面进行标签布置以及调用，动态生成页面。再根据自己在阿里云服务器购买的服务器的配置，进行环境的搭建，定期的更新维护，实时的查漏补缺和上传代码。",
						"href":"http://www.hzwtqx.cn"
					},
					{
						"title":"杭州万通汽车教育官网 移动端",
						"img":"/img/x02.jpg",
						"des":"根据网页平面师设计好的ui设计图，高度还原设计图以及就学院性质做零散的修改，再结合百度统计平台数据，对网站做优化，以及根据热力图分析用户行为，针对性的对网站做改版。",
						"href":"http://m.hzwtqx.cn"
					},
					{
						"title":"杭州万通汽车教育信息收集平台",
						"img":"/img/x03.jpg",
						"des":"根据数据库里的数据表，运用PHP语言对其进行增删改查，通过页面的视觉化呈现出来，让后台咨询师更好的获得信息；其中页面包含：登录页面，详情页，各个菜单对应调用的页面。",
						"href":"http://www.hzwtqx.cn/"
					}
				]
			}
		},
		mounted(){
			this.showChart()
			 },
		methods:{
				toggle(){
					this.check=!this.check;
					//console.log(this.check)
					
				},
				submit(){
					const con=document.getElementById("con");
					const add=document.getElementById("add");
					const pattner=new RegExp(/^\d{5,12}@[qQ][qQ]\.(com|cn)$/);
					if(!this.check) alert("收件人都没有哦？要勾选上哟！☜");
					if(this.add==""){ 
						alert("发件方不能为空哦");
						add.focus();
						  return;

						}
					if(!pattner.test(this.add)){
						alert("格式好像不对哦");
						add.focus();
						  return;
					}
					if(this.con==""){ 
						alert("没什么想说的吗？");
						con.focus();
						  return;
					}
					else {
						var vm = this
						this.$http.post(vm.url,{"add":this.add,"con":this.con}).then((response)=>{
							alert(response.data);
						})
						
					}
				},
				showChart:()=>{
					let ctx=document.getElementById("myChart");
					let myChart=new Chart(ctx,{
						type:'bar',
						data:{
						labels:["html.css","js","vue","webpack","php","git","微信小程序"],
						datasets: [
							{
						label:"技能掌握度",
						data:["85","75","70","55","60","40","58"],
						backgroundColor:"#f14332db",
                        borderColor: "rgba(225,103,110,1)",
           				pointWidth:1,
						 }]
						},
						options: {
							responsive: true,
					        scales: {
					            yAxes: [{
					                ticks: {
					                    beginAtZero:true,
					                    fontSize:14,stepSize:10
					                }
					            }],
					            xAxes: [{
					                ticks: {
					                    fontSize:14,
					                    barWidth:10,

					                }
					            }]
					        },
					    }
					})
				},
				scrollHandler (el) {
				    console.log(el)
				}
			}

	}

</script>
<style type="stylesheet/less" lang='less' scoped>
	@import "/css/animate.min.css";
	.content{
		box-shadow: 1px 3px 6px #999;
		background:#fff;
		[class^=floor]{
			padding:60px 0 40px;
		}
		h2{color:#000;font-size: 30px;width:40%;margin:0 auto 30px;border-bottom:1px solid #000;padding-bottom:20px;}
		.col-md-11{margin:0 auto 8px;line-height: 30px;float:none;
}
		.floor01{
			.col-md-11{
				font-size: 18px;
				line-height: 40px;
				.animated{
			animation-delay:0.7s;
			-webkit-animation-delay:0.7s; /* Safari 和 Chrome */
			}
			}
			
		}
		.floor01,.floor03{
			background: #ece6e5;
		}
		.floor02,.floor04{
			background: #fff;
		}
		.floor03 {
			.add_li {background: #f4f3f3;
				height:332px;
				img{
					position: absolute;
					top:50%;
					left:50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		.floor04{
			.top{
				position:relative;
				a{
					position:absolute;
					right:20px;
					top:15px;
					font-size: 18px;
				}
			}
			.description{
				line-height: 30px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				margin-bottom:15px;

			}
			.title{
				color:#000;
				font-size:18px;
				font-weight:bold;
				height:55px;
				line-height:45px;
				border-bottom:1px solid #dedede;
				margin-bottom:15px;

			}
		}
		.floor05{
			background: #20c8d6;
			padding-bottom: 30px;
			.col{
				background: #fff;
				margin:auto;
				width:50%;
				margin-top: 30px;
				padding:40px 40px 55px;
				box-shadow: 2px 6px 8px #46464694;
				input[type="text"]{
					height:45px;
					line-height: 45px;
					padding:0 10px 0;
					margin-bottom: 20px;
					border: 1px solid #ccc;
					width:100%;
				}
				textarea{
					padding:20px 5px 0;
					margin-bottom:20px;
					border: 1px solid #ccc;
					width:100%;
				}
				label{
					color:#f00;
					height:30px;
					line-height: 30px;
					&.active{color:#ccc;}
					input{
						width:15px;
						height:15px;
						border:1px solid #ccc;
						margin-right:10px;
						margin-top: -3px;
						appearance:none;
						-webkit-appearance:none;
						&.active{
						background-image: url("/img/cbg.jpg");
						background-repeat: no-repeat;
						background-size: cover;
						}
					}
				}
				.pull-right{
					background: #ff8100;
					color:#fff;
					font-size: 18px;
					padding:0;
					height:30px;
					line-height: 30px;
					border:none;			
						}
			}
		}
	}
@media (max-width:789px){
	.content{
		[class^=floor]{
			padding:10px 0;
		}
		h2{
			font-size:2rem;
			padding-bottom:10px;
			margin-bottom:10px;
		}
		.floor01 .col-md-11,.floor02 .col-md-11,.floor03 .col-md-11,.floor04 .description{
			font-size:1.2rem;
				line-height:24px;
		}
	
		.floor02{
			#myChart{
				display:none !important;
			}
			.col-md-11{
				span{
					display:block;
				}
			}
		}
		.floor04{
			.top{
				a{
					display:none;
				}
			}
			.col-md-4{
				border-bottom:1px dotted #ccc;
				margin-bottom:10px;
				padding-bottom:10px;
				&:last-child{
					display:none;
				}
				.title{
					font-size:1.4rem;
					height:40px;
					line-height:36px;
				}
			}
			.footer_a.navigator{
				font-size:1.6rem;
				display:block;

			}
		}
		.floor05{
			.col{
				width:90%;
				input[type="text"]{
					height:30px;
					line-height:30px;
					margin-bottom:10px;
				}
				.pull-right{
					width:155px;
					margin-top:10px;
				}
			}
		}
	}
}
</style>