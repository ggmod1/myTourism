$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    echarts_1();
    echarts_4()
    echarts_31()
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var data = [{
            title: '**省'
        },
        ['本周（百分比/%）'],
        [{
            name: '自驾',
            max: 70
        }, {
            name: '跟团',
            max: 70
        }, {
            name: '飞机',
            max: 70
        }, {
            name: '高铁',
            max: 70
        }, {
            name: '火车',
            max: 70
        }],
        [21, 31, 7, 13, 28],
        ]
        option = {
            animation: true,
            color: ['#9DD060', '#35C96E', '#4DCEF8'],

            tooltip: {
            },

            radar: {
                center: ['50%', '50%'],
                radius: ["25%", "70%"],

                name: {
                    textStyle: {
                        color: '#72ACD1'
                    }
                },

                splitLine: {

                    lineStyle: {

                        color: 'rgba(255,255,255,.0',

                        width: 2

                    }

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)',
                        width: 1,
                        type: 'dotted'

                    },

                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                    }
                },
                indicator: data[2]
            },
            series: [{
                name: '',
                type: 'radar',
                data: [{
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[3],
                    name: data[1][0]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[4],
                    name: data[1][1]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[5],
                    name: data[1][2]
                }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var myChart2 = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                show: false
            },
            legend: {
                data: ['2022', '2023'],

                top: '2%',
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: '12',

                },
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
                },
            }],
            yAxis: [{
                type: 'value',

                axisLabel: {
                    //formatter: '{value} %'
                    show: false,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '2022',
                type: 'bar',
                data: [2, 3, 3, 4, 6, 4, 4, 2, 4, 2, 2, 1],
                barWidth: '20%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }, {
                name: '2023',
                type: 'bar',
                data: [1, 4, 5, 9, 12],
                barWidth: '20%',
                // barGap: 1,
                itemStyle: {
                    normal: {
                        color: '#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };
        option2 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                show: false

            },
            legend: {
                data: ['2022年', '2023年'],
                top: '5%',
                textStyle: {
                    color: "#fff",
                    fontSize: '12',

                },

                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{

                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: false,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '2022年',
                type: 'line',
                smooth: true,
                data: [2, 3, 3, 4, 6, 5, 5, 4 ,3 ,2 ,1, 1 ],

                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }, {
                name: '2023年',
                type: 'line',
                smooth: true,
                data: [3, 4, 6, 8, 9],
                barWidth: '15',
                // barGap: 1,
                itemStyle: {
                    normal: {
                        color: '#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);
        myChart2.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }




    //重新做最下
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb01'));
        //var myChart2 = echarts.init(document.getElementById('fb02'));
        // var myChart3 = echarts.init(document.getElementById('fb03'));
        // var myChart4 = echarts.init(document.getElementById('fb04'));
        var myChart2 = echarts.init(document.getElementById('myd1'));

        var myChart3 = echarts.init(document.getElementById('sysx'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}:{d}%",//显示
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: 0,
                itemWidth: 10,
                itemHeight: 10,
                data: ['旅游', '健身', '购物', '居家'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '调研显示',
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [

                        { value: 4, name: '旅游' },
                        { value: 2, name: '健身' },
                        { value: 2, name: '购物' },
                        { value: 1, name: '居家' },
                    ]
                }
            ]
        };

        //柱状图需要保留
        option2 = {
            grid: {
                left: '0',
                right: '0',
                top: '10%',
                bottom: '24%',
                //containLabel: true
            },
            legend: {
                data: ['幼儿', '成人', '老人'],
                bottom: 0,
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "#fff",
                    fontSize: '10',

                },

                itemGap: 5
            },
            tooltip: {
                show: "true",
                trigger: 'item'
            },
            yAxis: {
                type: 'value',
                show: false,
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    show: false,
                    //   inside: true,
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: ['出行百分比']
            }

            ],
            series: [
                {
                    name: '幼儿',
                    type: 'bar',
                    barWidth: '20',

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#20aa92',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barGap: '100%',
                    data: [20],
                    label: {
                        formatter: "{c}%",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },
                {
                    name: '成人',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#f4664e',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barWidth: '20',
                    data: [58],
                    label: {
                        formatter: "{c}%",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },
                {
                    name: '老人',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#0c93dc',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barWidth: '20',
                    data: [32],
                    label: {
                        formatter: "{c}%",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },

            ]
        };
        //曲线图需要保留
        option3 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                show: false
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: false,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '2023年',
                type: 'line',
                //smooth: true,
                data: [2.5, 3, 7, 8, 10],

                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        /*myChart4.setOption(option4);
        myChart5.setOption(option5);
    
        myChart7.setOption(option7);*/
        window.addEventListener("resize", function () {
            myChart.resize();

            myChart2.resize();
            myChart3.resize();
            /* myChart4.resize();
             myChart5.resize();
             myChart7.resize();*/
        });
    }
})
















