import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'https://api.intickets.ru/widget/v1/',
    timeout: 1000,
    headers: {
    Authorization: 'Bearer 9981fc67-d375-fba8-7f85-307a30cce3a7'}
}

)
