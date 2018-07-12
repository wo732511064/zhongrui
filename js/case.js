function ecase() {
	
	var pathSymbols = {
		reindeer: 'path://F1M33.5,6C18.312,6 6,18.312 6,33.5C6,48.688 18.312,61 33.5,61C48.688,61 61,48.688 61,33.5C61,18.312 48.688,6 33.5,6zM33.5,0C52.001,0 67,14.998 67,33.5C67,45.057 61.148,55.246 52.245,61.268C52.245,61.268 33.5,80.013 33.5,80.013C33.5,80.013 14.755,61.268 14.755,61.268C5.852,55.247 0,45.057 0,33.5C0,14.998 14.998,0 33.5,0z'
	};
	
	
	var myChart = echarts.init(document.getElementById('main'));
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
			data: ['课程名称课程名称', '课程名称课程名称', '课程名称课程名称', '课程名称课程名称', '课程名称课程名称','课程名称课程名称'],

			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisTick: {
			        show: false
			   },
			axisLine:{       //y轴
	          show:false
	
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
                        return (newParamsName.length > 9 ? (newParamsName.slice(0, 9) + "...") : newParamsName);
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
			type: 'pictorialBar',
			barCategoryGap: '-130%',
			symbol: 'path://M130.000,-0.000 C164.483,88.183 253.000,205.000 253.000,205.000 L-0.000,205.000 C-0.000,205.000 95.794,84.301 130.000,-0.000 Z',
			itemStyle: {
				normal: {
					color: function (params){
                        var colorList = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: '#01c2e6'
										}, {
											offset: 1,
											color: '#1160ff'
										}]),
                        				new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: 'rgba(120,120,120,0.5)'
										}, {
											offset: 1,
											color: 'rgba(130,130,130,0.5)'
										}]),
										new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: '#01c2e6'
										}, {
											offset: 1,
											color: '#1160ff'
										}]),
                        				new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: 'rgba(120,120,120,0.5)'
										}, {
											offset: 1,
											color: 'rgba(130,130,130,0.5)'
										}]),
										new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: '#01c2e6'
										}, {
											offset: 1,
											color: '#1160ff'
										}]),
                        				new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: 'rgba(120,120,120,0.5)'
										}, {
											offset: 1,
											color: 'rgba(130,130,130,0.5)'
										}]),
										
                        ];
                        return colorList[params.dataIndex];
                   }
				},
				emphasis: {
					color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: '#ffc74e'
										}, {
											offset: 0.8,
											color: '#ff9211'
										}])
				}
			},
			data: [35, 51, 32, 40, 59,89]
		}, {
			type: 'pictorialBar',
			barGap: '-98.5%',
			itemStyle: {
				normal: {
					color: function (params){
                        var colorList = ['#20c9e9','#939393','#20c9e9','#939393','#20c9e9','#939393'];
                        return colorList[params.dataIndex];
                   }
				},
				emphasis: {
					color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: '#ffc74e'
										}, {
											offset: 0.8,
											color: '#ff9211'
										}])
				}
			},
			
			label: {
				normal: {
					show: true,
					position: ['46%', '18px'],
					color: '#000000',
					fontSize: 14,
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
					symbolSize: [50, 60]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 60]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 60]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 60]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 60]
				},
				{
					value: 89,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 60]
				},
			]
		}]
	};
	myChart.setOption(option);
	
}