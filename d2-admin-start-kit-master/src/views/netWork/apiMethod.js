import apiBook from "@/views/netWork/apiBook";
import {axiosGet, axiosPost, axiosPostJson} from "@/views/netWork/axiosAll";


export function everyOneLogin(userName,userPassword) {
   let url = apiBook.everyOne.login
   let params = {
     userName: userName,
     userPassword: userPassword
   }
   return  axiosPost(url,params)

}
export function getAbility(studentId) {
  let url = apiBook.student.getAbility
  let params ={
    studentId : studentId
  }
  return axiosGet(url,params)

}

export function getTitle(userId) {
  let url = apiBook.student.getTitle
  let params ={
    userId : userId
  }
  return axiosGet(url,params)

}

export function editTitle(title) {
  let url = apiBook.student.editTitle
  let sTitle = title
  return axiosPost(url,title)
}

export function deleteTitle(titleId) {
  let url = apiBook.student.deleteTitle + titleId
  return axiosGet(url)

}

export function addTitle(title,titleType) {
  let url = apiBook.student.addTitle + "/" +titleType

  return axiosPost(url,title)

}
