import { request, apiConfig } from '../../utils'

export async function query (params) {
  return request(apiConfig.bbsCategory, {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request(apiConfig.bbsCategory, {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request(apiConfig.bbsCategory, {
    method: 'delete',
    data: params
  })
}

export async function update (params) {
  return request(apiConfig.bbsCategory, {
    method: 'put',
    data: params
  })
}
