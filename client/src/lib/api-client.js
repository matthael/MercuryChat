import axios from "axios"
import {HOST} from '@/utils/constans'

export const apiClient = axios.create({
    baseURL: HOST
})