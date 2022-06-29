import request from './request'
export const login = (data) => {
    return request({
        url: '/users/signin',
        method: 'POST',
        data: data
    })
}