<template>
  <d2-container>
     <template slot="header">
       <el-button type="text" disabled>个人信息</el-button>
     </template>
    <el-card class="divCard" >
      <div slot="header">能力总览</div>
      <div>
        <el-row :gutter="20" >
          <el-col :span="5">
            <el-card class="touxiang" >
              <div v-if="chooseNick">
                <div v-if="!studentConf.studentNickUrl">
                  <img src="../../../../public/userFor/touxiang.png" style="width: 100%;height: 100%;border-radius: 50%"  @click="changeNick">
                </div>
                <div v-else>
                  <img :src="studentConf.studentNickUrl" style="width: 100%;height: 100%;border-radius: 50%"  @click="changeNick">
                </div>
              </div>
              <div v-else>
                <div v-if="!studentConf.studentUrl">
                  <img src="../../../../public/userFor/zhengjing.png" style="width: 100%;height: 100%;border-radius: 50%"  @click="changeNick">
                </div>
                <div v-else>
                  <img :src="studentConf.studentUrl" style="width: 100%;height: 100%;border-radius: 50%"  @click="changeNick">
                </div>
              </div>



            </el-card>
            <el-card style="margin-top: 40px;width: 80%" class="xuexiaobeijing">
              <p class="conf-key">临泉县第一中学</p>
            </el-card>
          </el-col>
          <el-col :span="7">
            <el-card class="conf">
              <div ><p class="conf-key">姓  名：</p><p class="conf-value">{{studentConf.studentName}} </p>   </div>
              <div ><p class="conf-key">昵  称：</p><p class="conf-value">{{studentConf.studentNickName}} </p>   </div>
              <div ><p class="conf-key">荣  誉：</p><p class="conf-value">{{studentConf.studentHonor}} </p>   </div>
              <div ><p class="conf-key">称  号：</p><p class="conf-value">{{studentConf.studentDesignation}} </p>   </div>
              <div ><p class="conf-key">班  级：</p><p class="conf-value">{{classConf.classNoName}} </p>   </div>
            </el-card>
          </el-col>
          <el-col :span="3">
          <br>
          </el-col>
          <el-col :span="8">
            <el-card class="leidatu" style="height: 400px">
              <div><leidatu3 style="height: 200px;width: 200px" :chart-data="chartsData" :toolbox="toolbox" ></leidatu3></div>
              <el-button style="position: absolute;bottom: 20px;" :type="(showPro?'':'primary')" @click="backData">班级排名</el-button>
              <el-button style="position: absolute;bottom: 20px;right: 100px" :type="(showPro?'primary':'')" @click="changeData">年级排名</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>

  </d2-container>
</template>

<script>
  import leidatu from "../../echart-comment/leidatu";
  import leidatu2 from "../../echart-comment/leidatu2";
  import leidatu3 from "../../echart-comment/leidatu3";
  import {getAbility} from "../../netWork/apiMethod";
export default {
  name: 'studentConf',
  components:{
    leidatu,
    leidatu2,
    leidatu3
  },
  data(){
    return{
      dataZoom:[
        {
          type: 'slider',
          start: 0,
          end: 100
        }
      ],
      toolbox:{
        feature: {
          magicType: {type: ['line', 'bar']},
          saveAsImage: {}
        }
      },
      showPro: false,
      chartsData: {},
      classChart: {},
      gradeChart: {},
      chooseNick:true,
      studentConf:{
        studentName: null,
        studentUrl: null,
        studentNickName: null,
        studentNickUrl: null,
        studentHonor: null,
        studentConf: null,
        studentDesignation: null,
        classId: null,
        cTime: null,
        uTime: null,
        sstudentId: null
      },
      classConf:{
        classNoName: null,
        classNickName: null,
        classUrl: null,
        classWatchword: null,
        classConf: null,
        classHonor: null,
        classDesignation: null,
        sclassId: null,
      }

    }

  },
  mounted() {
    const vm = this
    vm.$nextTick(()=> {})
    this.getOriginData()
  },
  methods:{
    changeNick(){
      this.chooseNick = !this.chooseNick
    },
    changeData(){
      this.chartsData = this.gradeChart
      this.showPro = true
    },
    backData() {
      this.chartsData = this.classChart
      this.showPro = false
    },
    getOriginData(){
      getAbility(this.$store.state.typeId).then(res =>{
            this.studentConf = res.student
            this.classConf = res.class
        this.chartsData = res.classGradeChart
        this.classChart = res.classGradeChart
        this.gradeChart = res.GradeGradeChart
      }).catch(error => {
        console.log(error)
      })
    }
  }

}
</script>

<style>
  .divCard{
    margin-top: 10px;
    background-color: rgba(150, 255, 28, 0.26);
  }
  .conf{
    border: 5px solid;
    border-radius: 10%;border-image: linear-gradient(to right,#ff831c, #0ceebb) 20 20;
    background: rgba(255, 255, 255, 0.3) url("../../../../public/userFor/listBack.png");
  }
  .touxiang{
    height: 200px;width: 200px;border-radius: 50%;background: linear-gradient(to right,#ff478e,#2fff2e);


  }
  .confs{
    border: 5px solid;
    border-radius: 10%;border-image: linear-gradient(to left,#ff831c, #0ceebb) 20 20;
    background: rgba(255, 255, 255, 0.3) url("../../../../public/userFor/listBack.png");
  }
  .leidatu{
    border: 5px solid;
    border-radius: 10%;border-image: linear-gradient(to left,#ff831c, #0ceebb) 20 20;
    background: rgba(255, 255, 255, 0.3) url("../../../../public/userFor/leidabeijing1.png");
  }
  .xuexiaobeijing{
    border: 5px solid;
    border-radius: 10%;border-image: linear-gradient(to left,#ff831c, #0ceebb) 20 20;
    background: rgba(255, 255, 255, 0.3) url("../../../../public/userFor/xuexiaobeijing.png");
  }
  .conf-key{
    /*width: 300px;*/
    /*height: 200px;*/
    background-image: -webkit-linear-gradient(left, #1c006f, #d5df13 10%, #bb6a03 20%, #37001e 30%, #1b001d 40%, #1a000a 50%,#191a00 60%,#051600 70%,#1b001d 80%,#1a000a 90%,#191a00 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 60s linear infinite;
    font-size: 20px;
    display: inline-block;
    border-bottom: 1px dotted grey;
    height: 25px;
    font-weight: 800;

  }
  .conf-value{

    background-image: -webkit-linear-gradient(left, #1c006f, #d5df13 10%, #bb6a03 20%, #37001e 30%, #1b001d 40%, #1a000a 50%,#191a00 60%,#051600 70%,#1b001d 80%,#1a000a 90%,#191a00 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation1 60s linear infinite;
    font-size: 20px;  height: 25px;
    display: inline-block;
    font-weight: 800;
  }

  @keyframes masked-animation {
    0% {
      background-position: 0  0;
    }
    50% {
      background-position: -100%  0;
    }
    100% {
      background-position: 0%  0;
    }
  }
  @keyframes masked-animation1 {
    0% {
      background-position: -100%  0;
    }
    50% {
      background-position: 0%  0;
    }
    100% {
      background-position: -100%  0;
    }
  }

  .text-reflect-base{
    color: #001a03;
    -webkit-box-reflect:below 10px;
  }
</style>
