import axios, { AxiosRequestConfig } from 'axios'

// start:0,limit:10,ort:'volume',desc:true,period:1
const BASEURL = 'http://192.168.31.215:7001'
export async function getCalendarList(obj: any) {
  return await axios.get(`${BASEURL}/get-drop`, {
    params: obj,
  })
}
export async function addCalendarList(obj: any) {
  return await axios.post(`${BASEURL}/create-drop`, obj)
}
export async function updateCalendarList(obj: any) {
  return await axios.post(`${BASEURL}/update-drop`, obj)
}
export async function deleteCalendarList(obj: any) {
  return await axios.post(`${BASEURL}/delete-drop`, obj)
}
