import axios from 'axios'

export const http = axios.create({
	baseURL: 'http://dummy.restapiexample.com/api/v1/'
})
