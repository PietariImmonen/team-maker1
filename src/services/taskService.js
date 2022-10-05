import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/tasks'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const createNew = async (newObject) => {
  console.log(newObject)
  const req = axios.post(baseUrl, newObject)
  return req.then(res => res.data)
}