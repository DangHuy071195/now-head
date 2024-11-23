import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  InternalServerError: 500,
};

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

const injectToken = async (config: AxiosRequestConfig): Promise<any> => {
  try {
    // const tokenStorage = localStorage.getItem('token');
    // if (tokenStorage) {
    //   config.headers!.Authorization = `Bearer ${tokenStorage}`;
    //   return config;
    // }
    return config
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl || process.env.API_URL!;
  }
  private baseUrl: string;
  private instance: AxiosInstance | null = null;
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
    });

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  // request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
  //   return this.http.request(config);
  // }
  // get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
  //   return this.http.get<T, R>(url, config);
  // }

  // post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
  //   // return this.http.post<T, R>(url, data, config)
  //   return this.http.post<T, R>(url, data, config);
  // }

  // delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
  //   return this.http.delete<T, R>(url, config);
  // }

  // put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
  //   return this.http.put<T, R>(url, data, config);
  // }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig, cancelToken?: CancelToken): Promise<R> {
    if (cancelToken) {
      config.cancelToken = cancelToken;
    }
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig, cancelToken?: CancelToken): Promise<R> {
    if (cancelToken) {
      config = { ...config, cancelToken };
    }
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
    cancelToken?: CancelToken
  ): Promise<R> {
    if (cancelToken) {
      config = { ...config, cancelToken };
    }
    return this.http.post<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
    cancelToken?: CancelToken
  ): Promise<R> {
    if (cancelToken) {
      config = { ...config, cancelToken };
    }
    return this.http.delete<T, R>(url, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
    cancelToken?: CancelToken
  ): Promise<R> {
    if (cancelToken) {
      config = { ...config, cancelToken };
    }
    return this.http.put<T, R>(url, data, config);
  }

  private async handleError(error: any) {
    if (error) {
      const { status } = error;
      switch (status) {
        case StatusCode.InternalServerError: {
          // Handle InternalServerError
          break;
        }
        case StatusCode.Forbidden: {
          // Handle Forbidden

          break;
        }
        case StatusCode.Unauthorized: {
          // await setLocalStorage('token', null)
          // window.location.reload()
          break;
        }
        case StatusCode.TooManyRequests: {
          // Handle TooManyRequests
          break;
        }
      }
      return Promise.reject(error);
    }
  }
}
const apiClient = new Http(process.env.API_URL!);
export default apiClient;
