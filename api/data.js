import axios from './axios'


export const getMenu = (param) => {
      return axios.request({
          url: '/premission/getMenu',
          method: 'post',
          data: param
      })

}

export const getData = (param) => {
    return axios.request({
        url: '/home/getData',
        method: 'post',
        data: param
    })

}

