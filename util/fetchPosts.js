import axios from 'axios'

// const APP_ID = '6062bfdc8e5d55593838348c'
const APP_ID = '60619ad4aa5e84727fc2cab3'

export const fetchPosts = (tag) => {
  if (tag) {
    return axios.get(`https://dummyapi.io/data/api/tag/${tag}/post?limit=50`, {
      headers: { 'app-id': APP_ID },
    })
  } else {
    return axios.get(`https://dummyapi.io/data/api/post?limit=50`, {
      headers: { 'app-id': APP_ID },
    })
  }
}
