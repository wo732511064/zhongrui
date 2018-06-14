function YiDong(){
	$("#a1").click(function() {
		$(a6).css({
			"top": "0px",
			"left": "0px"
		})
		$(a1).css({
			"top": "0px",
			"left": "180px"
		})
		$(a2).css({
			"top": "180px",
			"left": "180px"
		})
		$(a3).css({
			"top": "360px",
			"left": "180px"
		})
		$(a4).css({
			"top": "360px",
			"left": "0px"
		})
		$(a5).css({
			"top": "180px",
			"left": "0px"
		})
		$(a1).addClass("active")
		$(a1).siblings().removeClass("active")
		$(b1).addClass("active")
		$(b1).siblings().removeClass("active")
	})
	$("#a2").click(function() {
		$(a1).css({
			"top": "0px",
			"left": "0px"
		})
		$(a2).css({
			"top": "0px",
			"left": "180px"
		})
		$(a3).css({
			"top": "180px",
			"left": "180px"
		})
		$(a4).css({
			"top": "360px",
			"left": "180px"
		})
		$(a5).css({
			"top": "360px",
			"left": "0px"
		})
		$(a6).css({
			"top": "180px",
			"left": "0px"
		})
		$(a2).addClass("active")
		$(a2).siblings().removeClass("active")
		$(b2).addClass("active")
		$(b2).siblings().removeClass("active")
	})
	$("#a3").click(function() {
		$(a2).css({
			"top": "0px",
			"left": "0px"
		})
		$(a3).css({
			"top": "0px",
			"left": "180px"
		})
		$(a4).css({
			"top": "180px",
			"left": "180px"
		})
		$(a5).css({
			"top": "360px",
			"left": "180px"
		})
		$(a6).css({
			"top": "360px",
			"left": "0px"
		})
		$(a1).css({
			"top": "180px",
			"left": "0px"
		})
		$(a3).addClass("active")
		$(a3).siblings().removeClass("active")
		$(b3).addClass("active")
		$(b3).siblings().removeClass("active")
	})
	$("#a4").click(function() {
		$(a3).css({
			"top": "0px",
			"left": "0px"
		})
		$(a4).css({
			"top": "0px",
			"left": "180px"
		})
		$(a5).css({
			"top": "180px",
			"left": "180px"
		})
		$(a6).css({
			"top": "360px",
			"left": "180px"
		})
		$(a1).css({
			"top": "360px",
			"left": "0px"
		})
		$(a2).css({
			"top": "180px",
			"left": "0px"
		})
		$(a4).addClass("active")
		$(a4).siblings().removeClass("active")
		$(b4).addClass("active")
		$(b4).siblings().removeClass("active")
	})
	$("#a5").click(function() {
		$(a4).css({
			"top": "0px",
			"left": "0px"
		})
		$(a5).css({
			"top": "0px",
			"left": "180px"
		})
		$(a6).css({
			"top": "180px",
			"left": "180px"
		})
		$(a1).css({
			"top": "360px",
			"left": "180px"
		})
		$(a2).css({
			"top": "360px",
			"left": "0px"
		})
		$(a3).css({
			"top": "180px",
			"left": "0px"
		})
		$(a5).addClass("active")
		$(a5).siblings().removeClass("active")
		$(b5).addClass("active")
		$(b5).siblings().removeClass("active")
	})
	$("#a6").click(function() {
		$(a1).css({
			"top": "0px",
			"left": "0px"
		})
		$(a2).css({
			"top": "0px",
			"left": "180px"
		})
		$(a3).css({
			"top": "180px",
			"left": "180px"
		})
		$(a4).css({
			"top": "360px",
			"left": "180px"
		})
		$(a5).css({
			"top": "360px",
			"left": "0px"
		})
		$(a6).css({
			"top": "180px",
			"left": "0px"
		})
		$(a6).addClass("active")
		$(a6).siblings().removeClass("active")
		$(b6).addClass("active")
		$(b6).siblings().removeClass("active")
	})
}

function starcourse() {
	var pathSymbols = {
		reindeer: 'image://./images/starcourse/icon.png'
	};
	
	//IT管理
	var myChart = echarts.init(document.getElementById('main1'));
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['软件研发项目管理最佳实践', '打造高效的软件研发团队', 'Scrum敏捷项目管理实战演练', '从技术走向管理高级实战'],

			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 5;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};
	myChart.setOption(option);
	
	//移动开发
	var myChart2 = echarts.init(document.getElementById('main2'));
	var option2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['构建高可用跨平台移动应用', 'Web前端框架选型与应用实战', 'HTML5(移动)应用高级实战', '微信APP高级实战', 'Python爬虫与数据分析'],

			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 5;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40, 59]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};
	myChart2.setOption(option2);
	
	var myChart3 = echarts.init(document.getElementById('main3'));
	var option3 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['Oracle/MySQL高级性能优化','MySQL数据库高级应用开发','构建Hadoop大数据平台','Spark大数据处理技术分析与实践','机器深度学习算法与应用','数据分析与数据建模','基于R/Python的数据分析与挖掘（二选一）'],
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 5;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40, 59,67,42]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
						if(params.dataIndex == 5) {
							return '67期'
						}
						if(params.dataIndex == 6) {
							return '42期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 67,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 42,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};
	myChart3.setOption(option3);
	
	var myChart4 = echarts.init(document.getElementById('main4'));
	var option4 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['JAVA单元测试方法与实践','软件研发的质量管理与实战'],
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 5;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}
			]
		}]
	};
	myChart4.setOption(option4);
	
	//架构测试
	var myChart5 = echarts.init(document.getElementById('main5'));
	var option5 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['软件架构与设计高级实战','微服务的架构与实践','大规模分布式系统架构与实战','软件安全的设计与开发','JavaWeb核心开发技术剖析与应用','构建高性能的JAVA EE应用','互联网运维与DevOps实战','OOAD与UML建模实战'
],
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 4;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40, 59,67,42,55]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
						if(params.dataIndex == 5) {
							return '67期'
						}
						if(params.dataIndex == 6) {
							return '42期'
						}
						if(params.dataIndex == 7) {
							return '55期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 67,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 42,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 55,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};
	myChart5.setOption(option5);
	
	//产品规划
	var myChart6 = echarts.init(document.getElementById('main6'));
	var option6 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['用户体验设计实战营','Axure快速原型实战','互联网产品经理实战营','产品设计与需求表达','软件需求开发与管理'],

			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var provideNumber = 5;  //一行显示几个字
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return (newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40, 59]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 18,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};
	myChart6.setOption(option6);
}