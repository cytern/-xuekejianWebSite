<template>
  <d2-container>
    <template slot="header">信息栏
    <el-button type="primary" style="margin-left: 30px" @click="showAdd"> 发布帖子 </el-button>
    </template>
   <el-card class="divCard">
     <div slot="header">公告信息栏</div>
     <el-row :gutter="20">
       <el-col :span="6" v-for="(item,index) in titles" :key="index">
         <div v-if="item.isEnd">
           <el-tooltip class="item" effect="dark" content="已过期" placement="bottom-start">
           <el-card class="isFinished">
             <div slot="header" style="font-weight: 600">
               {{item.sTitleTitle}}
               <el-button type="text" disabled style="margin-left: 30px;color: black;font-size: smaller">{{item.titleType == 'class'?'帖子':'公告'}}</el-button>
               <el-button  type="info" size="small" disabled style="margin-left: 50px"  @click="showEdit(item)">已过期</el-button>
             </div>
             <div ><P>{{item.sTitleConf}}</P>
               <p style="margin-left: 150px">------{{item.startName}}</p>
               <p style="color: #00870d">开始时间: --{{item.cTime}}--</p>
               <p style="color: #871b00">结束时间: --{{item.endTime}}--</p>
             </div>
           </el-card>
           </el-tooltip>
         </div>
         <div v-else>
           <div v-if="item.isStart">
             <el-card class="isUse">
               <div slot="header" style="font-weight: 600">
                 {{item.sTitleTitle}}

                 <el-button type="text" disabled style="margin-left: 30px;color: black;font-size: smaller">{{item.titleType == 'class'?'帖子':'公告'}}</el-button>
                 <el-button v-if="item.isMine" type="warning" size="small"  style="margin-left: 50px" @click="showEdit(item)">修改</el-button>
               </div>
               <div ><P>{{item.sTitleConf}}</P>
                 <p style="margin-left: 150px">------{{item.startName}}</p>
                 <p style="color: #00870d">开始时间: --{{item.cTime}}--</p>
                 <p style="color: #871b00">结束时间: --{{item.endTime}}--</p>

               </div>
             </el-card>
           </div>
           <div v-else>
             <el-tooltip class="item" effect="dark" content="即将到来" placement="bottom-start">
             <el-card class="isNotUse">
               <div slot="header" style="font-weight: 600">
                 {{item.sTitleTitle}}

                 <el-button type="text" disabled style="margin-left: 30px;color: black;font-size: smaller">{{item.titleType == 'class'?'帖子':'公告'}}</el-button>
                 <el-button v-if="item.isMine" type="primary" size="small"  style="margin-left: 50px;opacity: 10"  @click="showEdit(item)">修改</el-button>
               </div>
               <div ><P>{{item.sTitleConf}}</P>
                 <p style="margin-left: 150px">------{{item.startName}}</p>
                 <p style="color: #00870d">开始时间: --{{item.cTime}}--</p>
                 <p style="color: #871b00">结束时间: --{{item.endTime}}--</p>

               </div>
             </el-card>
             </el-tooltip>
           </div>
         </div>
       </el-col>
     </el-row>
   </el-card>
    <el-dialog
      title="发布帖子"
      :visible.sync="canAdd"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="tempTitle" label-width="80px">
        <el-form-item label="帖子ID">
          <el-input disabled v-model="tempTitle.sTitleId"></el-input>
        </el-form-item>
        <el-form-item label="帖子标题">
          <el-input  v-model="tempTitle.sTitleTitle"></el-input>
        </el-form-item>
        <el-form-item label="帖子内容">
          <el-input type="textarea"  v-model="tempTitle.sTitleConf"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="tempTitle.cTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOption">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="tempTitle.endTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOption">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="canAdd = false">取 消</el-button>
    <el-button type="primary" @click="sendAdd">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="修改帖子"
      :visible.sync="canEdit"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="tempTitle" label-width="80px">
        <el-form-item label="帖子ID">
          <el-input disabled v-model="tempTitle.sTitleId"></el-input>
        </el-form-item>
        <el-form-item label="帖子标题">
          <el-input  v-model="tempTitle.sTitleTitle"></el-input>
        </el-form-item>
        <el-form-item label="帖子内容">
          <el-input type="textarea"  v-model="tempTitle.sTitleConf"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="tempTitle.cTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOption">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="tempTitle.endTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOption">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
         <el-button type="danger" @click="sendDelete">删除</el-button>
    <el-button @click="canEdit = false">取 消</el-button>
    <el-button type="primary" @click="sendUpdate">确 定</el-button>

  </span>
    </el-dialog>
  </d2-container>
</template>

<script>
  import {getTitle,editTitle,addTitle,deleteTitle} from "../../netWork/apiMethod";

  export default {
  name: 'notice',
  data () {
    return{
        canAdd: false,
        canEdit:false,
       titles: [],
      tempTitle: {
        sTitleId: null,
        titleType: null,
        startUserId: null,
        sTitleConf: null,
        cTime: null,
        endTime: null,
        sTitleTitle: null,

        isStart: null,
        isEnd: null,
        startName: null,
      },
      pickerOption: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '明天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '三天后',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 3);
            picker.$emit('pick', date);
          }
        },
          {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
      }
    }
  },
  mounted() {
   this.getAllTitles()
  },
  methods: {
    showEdit(item){
      this.changeDate()
      this.tempTitle = item
      this.canEdit = true
    },
    sendAdd() {
      let sTitle ={
        sTitleId: this.tempTitle.sTitleId,
        titleType: this.tempTitle.titleType,
        startUserId: this.$store.state.userId,
        sTitleConf: this.tempTitle.sTitleConf,
        cTime: this.tempTitle.cTime,
        endTime: this.tempTitle.endTime,
        sTitleTitle: this.tempTitle.sTitleTitle,
      }
      addTitle(sTitle,"class").then(res =>{
        this.getAllTitles()
        this.changeDate()
        this.canEdit = false
      })
    },
    sendUpdate(){
      let sTitle ={
        sTitleId: this.tempTitle.sTitleId,
        titleType: this.tempTitle.titleType,
        startUserId: this.$store.state.userId,
        sTitleConf: this.tempTitle.sTitleConf,
        cTime: this.tempTitle.cTime,
        endTime: this.tempTitle.endTime,
        sTitleTitle: this.tempTitle.sTitleTitle,
      }
      editTitle(sTitle).then(res=>{
        this.getAllTitles()
        this.changeDate()
        this.canEdit = false
      })
    },
    sendDelete(){
      let id = this.tempTitle.sTitleId
      deleteTitle(id).then(res =>{
        this.getAllTitles()
        this.changeDate()
        this.canEdit = false
      })
    },
    changeDate(){
      this.tempTitle = {
        sTitleId: null,
        titleType: null,
        startUserId: null,
        sTitleConf: null,
        cTime: null,
        endTime: null,
        sTitleTitle: null,

        isStart: null,
        isEnd: null,
        startName: null,
      }
    },
    showAdd() {
      this.canAdd = true
      this.changeDate()
    },
    getAllTitles(){
        getTitle(this.$store.state.userId).then(res =>{
           this.titles  = res
        })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.changeDate()
          this.canEdit = false
          this.canAdd = false
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>
<style>
  .isUse{
    background-color: rgba(91, 198, 255, 0.77);
    margin-top: 20px;
  }
  .isNotUse{
    background-color: rgba(255, 95, 0, 0.88);
    opacity: 0.6;
    margin-top: 20px;
  }
  .isFinished{
    background-color: rgba(0, 0, 0, 0.26);
    opacity: 0.3;
    margin-top: 20px;
  }
</style>
