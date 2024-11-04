import axios, { AxiosRequestConfig } from "axios"
import humps from "humps"
import { auth } from "@users/utils/auth.ts"

export const domain = import.meta.env.VITE_BASE_URL

//  Add Base URL and change snake_case to camelCase
const baseAxios = axios.create({
    baseURL: `${domain}/api/v1/`,
    transformResponse: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(axios.defaults.transformResponse as any),
        humps.camelizeKeys,
    ],
    transformRequest: [
        humps.decamelizeKeys,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(axios.defaults.transformRequest as any),
    ],
})

baseAxios.interceptors.request.use((config) => ({
    ...config,
    params: humps.decamelizeKeys(config.params),
}))

export default baseAxios

export async function request(options: AxiosRequestConfig, isPublic = false) {
    options = isPublic ? options : { ...options, ...auth() }
    const { data } = await baseAxios(options)
    return data
}
