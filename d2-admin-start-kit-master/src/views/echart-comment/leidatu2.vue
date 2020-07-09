<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
    export default {
        name: "leidatu2.0",
      data(){
          return{
            chartData: {
              columns: ['日期', '语文', '数学', '英语','物理','化学','生物','政治','地理','历史'],
              rows: [
                { '日期': '1/1', '语文': 150, '数学': 150, '英语': 150,'物理':100,'化学':100,'生物':100,'政治':100,'地理':100,'历史':100 },
                { '日期': '1/2',  '语文': 140, '数学': 130, '英语': 150,'物理':90,'化学':80,'生物':70,'政治':89,'地理':100,'历史':100  },

              ]
            },
            chartSettings:{

              labelMap: {
                '访问用户': '第一次考试',
              },
              digit:2,
              lineStyle: {
                color: '#FF6600',
                opacity: 1
              },
              areaStyle: {
                normal: { // 单项区域填充样式
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1,
                  color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                      offset: 0,
                      color: '#8590fb'
                    }, {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    }, {
                      offset: 1,
                      color: '#4cc2d7'
                    }],
                    globalCoord: false
                  },
                  opacity: 50 // 区域透明度
                }
              },

            }
          }
      }
    }
</script>

<style scoped>

</style>
