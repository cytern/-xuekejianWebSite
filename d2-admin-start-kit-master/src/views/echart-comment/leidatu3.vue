<template>
  <div>
    <div style="width:350px;height:350px;" :id="echarts" class="echarts"  ref="echarts"></div>
  </div>
</template>

<script>
    import echarts from "echarts";

    export default {
        name: "leidatu3",
      watch: {
        //观察option的变化
        chartData: {
          handler(newVal, oldVal) {
            if (this.myChart){
              this.changeChart()
            }else {
              this.initEcharts()
            }
          },
          deep: true //对象内部属性的监听，关键。
        }
      },
      mounted() {
        const vm = this
        vm.$nextTick(()=> {
          vm.drawChart()
        })
      },
      props: {
        // 接收父组件传递过来的信息
        chartData: {
          type: Object,
          default: ()=>{}
        },

      },
      data (){
        return{
          socres: [130, 121, 143, 87, 79,97],
          options:{
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: ['#00c2ff', '#f9cf67', '#e92b77'],
            legend: {
              show: true,
              // icon: 'circle',//图例形状
              bottom: 45,
              center: 0,
              itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
              itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
              itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
              textStyle: {
                fontSize: 7,
                color: '#ade3ff'
              },
              data: ['2016'],
            },
            radar: [{

              indicator: this.chartData.indicator,

              textStyle: {
                color: 'red'
              },
              center: ['50%', '50%'],
              radius: '45%',
              startAngle: 90,
              splitNumber: 3,
              orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
              // shape: 'circle',
              // backgroundColor: {
              //     image:imgPath[0]
              // },
              name: {
                formatter: '{value}',
                textStyle: {
                  fontSize: 14, //外圈标签字体大小
                  color: '#5b81cb' //外圈标签字体颜色
                }
              },
              splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                  color: ['rgba(255,100,100,0.1)', 'rgba(255,100,100,0.1)','rgba(255,100,100,0.1)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
              },
              // axisLabel:{//展示刻度
              //     show: true
              // },
              axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                  color: '#153269'
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#113865', // 分隔线颜色
                  width: 1, // 分隔线线宽
                }
              }
            }, ],
            series: [{
              name: '雷达图',
              type: 'radar',
              itemStyle: {
                emphasis: {
                  lineStyle: {
                    width: 4
                  }
                }
              },
              data: [ {
                name: '2018',
                value: this.chartData.totalValue,
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: '#e92b77',
                    borderWidth: 2.5,
                  }
                },
                areaStyle: {
                  normal: { // 单项区域填充样式
                    color: {
                      type: 'linear',
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [{
                        offset: 0,
                        color: '#99CCFF'
                      },
                        {
                          offset: 0.25,
                          color: '#99FFCC'
                        },
                        {
                          offset: 0.5,
                          color: 'rgba(0,0,0,.2)',

                        },
                        {
                          offset: 0.75,
                          color: '#FF9933'
                        },

                        {
                          offset: 1,
                          color: '#FF6600'
                        }],
                      globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                  }
                }
              }]
            }, ]
          },
          myChart: null
        }
      },
      computed: {
        echarts() {
          return 'echarts' + Math.random()*100000
        }
      },
      methods: {
          changeChart() {
            let opt = {
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: ['#00c2ff', '#f9cf67', '#e92b77'],
              legend: {
                show: true,
                // icon: 'circle',//图例形状
                bottom: 45,
                center: 0,
                itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
                itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
                itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                textStyle: {
                  fontSize: 7,
                  color: '#ade3ff'
                },
                data: ['2016'],
              },
              radar: [{

                indicator: this.chartData.indicator,

                textStyle: {
                  color: 'red'
                },
                center: ['50%', '50%'],
                radius: '45%',
                startAngle: 90,
                splitNumber: 3,
                orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
                // shape: 'circle',
                // backgroundColor: {
                //     image:imgPath[0]
                // },
                name: {
                  formatter: '{value}',
                  textStyle: {
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                  }
                },
                splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                  show: true,
                  areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(255,100,100,0.1)', 'rgba(255,100,100,0.1)','rgba(255,100,100,0.1)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                  }
                },
                // axisLabel:{//展示刻度
                //     show: true
                // },
                axisLine: { //指向外圈文本的分隔线样式
                  lineStyle: {
                    color: '#153269'
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                  }
                }
              }, ],
              series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                  emphasis: {
                    lineStyle: {
                      width: 4
                    }
                  }
                },
                data: [ {
                  name: '2018',
                  value: this.chartData.totalValue,
                  symbolSize: 2.5,
                  itemStyle: {
                    normal: {
                      borderColor: '#e92b77',
                      borderWidth: 2.5,
                    }
                  },
                  areaStyle: {
                    normal: { // 单项区域填充样式
                      color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                          offset: 0,
                          color: '#99CCFF'
                        },
                          {
                            offset: 0.25,
                            color: '#99FFCC'
                          },
                          {
                            offset: 0.5,
                            color: 'rgba(0,0,0,.2)',

                          },
                          {
                            offset: 0.75,
                            color: '#FF9933'
                          },

                          {
                            offset: 1,
                            color: '#FF6600'
                          }],
                        globalCoord: false
                      },
                      opacity: 1 // 区域透明度
                    }
                  }
                }]
              }, ]
            }
            this.options = opt
           this.myChart.setOption(this.options,true)
          },
        drawChart() {
          // 基于准备好的dom，初始化echarts实例
          let myChart =echarts.init(document.getElementById(this.echarts))
          this.myChart = myChart
          // 绘制图表
          myChart.setOption(this.options,true)
        },
        initEcharts(){
          let myChart =echarts.init(document.getElementById(this.echarts))
          this.myChart = myChart
        }
      }
    }
</script>

<style scoped>

</style>
