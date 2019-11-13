import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'https://api.intickets.ru/widget/v1/',
    timeout: 1000,
    headers: {
    Authorization: 'Bearer 7c23494f-03c8-4b6f-ceda-e18635145b5b'}
}

)
