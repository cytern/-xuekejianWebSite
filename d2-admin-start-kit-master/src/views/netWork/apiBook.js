const baseUrl = "http://localhost:2021/"
export default {
  everyOne:{
    login:  baseUrl + "everyOne/login",

  },
  student:{
    getAbility: baseUrl + "student/getMyAbility",
    getTitle: baseUrl + "student/getTiles",
    editTitle: baseUrl + "student/updateTitle",
    deleteTitle: baseUrl  +"student/deleteTitle/",
    addTitle: baseUrl  + "student/addTitle"
  }
}
