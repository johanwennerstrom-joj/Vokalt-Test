import axios from 'axios'

const URL = 'https://dummyapi.io/data/api/tag'
// const APP_ID = '6062bfdc8e5d55593838348c'
const APP_ID = '60619ad4aa5e84727fc2cab3'

export const fetchTags = () => {
  return axios.get(URL, { headers: { 'app-id': APP_ID } })
}
