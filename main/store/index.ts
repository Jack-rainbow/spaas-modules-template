/*
 * @Description: vuex store
 * @Author: barret
 * @Date: 2019-08-13 17:18:05
 * @LastEditTime: 2020-05-06 16:45:05
 * @LastEditors: Please set LastEditors
 */
import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'
import { loginByUsername, getMenu, getUserDetail } from '@/services/v1/deepexi-cloud'
import { getProductList } from '@/services/v1/asset-service'
import meta from '@/const/meta'
import { Istate, mapObj } from './types'

const cookiePath: string | undefined = process.env.COOKIE_PATH
const cookieDomain: string | undefined = process.env.COOKIE_DOMAIN

const isObject = (value): boolean => Object.prototype.toString.call(value) === '[object Object]'

export const state = (): Istate => ({
  userId: '',
  token: '',
  tenantId: '',
  username: '',
  user: {},

  meta: {},

  permission: {
    menuList: [],
    menuReady: false,
    spaName: meta.spaName,
    spaIcon: '',
    centerId: ''
  },

  setting: {
    collapse: false // 是否收缩侧边栏
  }
})

export const mutations: mapObj = {
  login(state: {}, payload: {}) {
    cookieKeys.forEach(key => {
      state[key] = payload[key]
      cookie.set(key, payload[key], {
        path: cookiePath,
        domain: cookieDomain
      })
    })
  },
  logout(state: {}) {
    cookieKeys.forEach(key => {
      state[key] = ''
      cookie.remove(key, {
        path: cookiePath,
        domain: cookieDomain
      })
    })
    // 清空state，跳转到login页的逻辑交给路由守卫
    window.location.reload()
  },
  update(state: {}, payload: {}) {
    Object.keys(payload).forEach(k => {
      if (isObject(payload[k])) {
        state[k] = Object.assign(state[k], payload[k])
      } else {
        state[k] = payload[k]
      }
    })
  }
}

export const actions: mapObj = {
  // 用户名账号登录
  async loginByUsername({ commit }, userInfo) {
    try {
      const { payload } = await loginByUsername(userInfo)

      commit('login', { ...payload, ...payload.params })

      commit('update', {
        user: payload
      })

      return payload
    } catch (err) {
      return Promise.reject(err)
    }
  },
  // 根据token获取用户信息
  async getUserInfo({ commit, state }) {
    try {
      const { payload } = await getUserDetail(state.token)
      commit('update', {
        user: payload,
        userId: payload.params.userId,
        username: payload.username,
        tenantId: payload.tenantId
      })

      return payload.tenantId
    } catch (error) {
      console.log(error)
    }
  },
  // 请求中心Id
  async fetchAppId({ dispatch, commit }) {
    const { payload } = await getProductList({
      status: 1
    })
    const productList = payload || []
    const [product] = productList.filter(item => item.productName === meta.spaName)
    if (!product) return
    const { id: centerId, icon } = product
    dispatch('fetchMenu', centerId, { root: true })

    commit('update', {
      permission: {
        centerId,
        spaIcon: icon
      }
    })
    return product
  },
  // 请求菜单
  async fetchMenu({ commit, state }, appId) {
    try {
      const params = {
        appId,
        code: meta.menuCode,
        tenantId: state.tenantId
      }
      const { payload } = await getMenu(params)
      commit('update', {
        permission: {
          menuList: payload
        }
      })
    } catch (error) {
      return error
    } finally {
      commit('update', { permission: { menuReady: true } })
    }
  }
}
