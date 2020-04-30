import { AxiosRequestConfig, AxiosInstance as AxiosInstanceBefore } from 'axios'
import { Context } from '@nuxt/types'

/** nuxt axios module */
export interface AxiosInstance extends AxiosInstanceBefore {
  setHeader(name: string, value: any): void
  setToken(token: string, type: string)
  onRequest(fn: (config) => void)
  onResponse(fn: (response) => void)
  onRequestError(fn: (error: Error) => void)
  onResponseError(fn: (error: Error) => void)
  onError(fn: (error: Error) => void)
  $request<T = any>(config: AxiosRequestConfig): Promise<T>
  $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  $patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}

/** nuxt middleware function */
export type MiddleWare = string | ((ctx: Context, cb?: Function) => Promise<void> | void);

/** nuxt plugin function */
export type Plugin = (
  ctx: Context,
  inject: (name: string, value: any) => void,
) => Promise<void> | void;

declare module '@nuxt/vue-app/types/index' {
  // extends Context interface
  interface Context {
    $axios: Nuxt.AxiosInstance
  }
}

declare module '@nuxt/vue-app/types/index' {
  // extends Context interface
  interface NuxtApp {
    layoutName: string
    setLayout(layoutName: string)
  }
}

export { Context } from '@nuxt/types'

// UMD module , so we can use global namesapce Nuxt.Context || Nuxt.MiddleWare || Nuxt.Plugin etc;
export as namespace Nuxt;
