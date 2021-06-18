import React, { useState } from 'react';

function useReqeust<R, Q = any>({
  request, // 任意的请求，或异步事件
  toast = false, // 要不要弹转圈圈的弹窗通过传参决定
}:{
  request:(params?:Q) => any;
  manul?:boolean;
  toast?:boolean;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [resData, setResult] = useState<R>(undefined as any); // 格式可以统一，比如： { success: true, state: 200 } 或者可以在封装请求时统一格式

  const sendRequest = async(params?:Q):Promise<any> => {
    setLoading(true);
    // if (toast) {
    //   Toast.loading('');
    // }
    try {
      const res = await request(params);
      setResult(res.data?.data);
      setLoading(false);
      // Toast.hide();
      return res.data?.data;
    } catch {
      setLoading(false);
      // Toast.hide();
      return undefined as any;
    }
  };

  return {
    loading,
    resData,
    sendRequest,
  };
};
// eslint-disable-next-line
export default useReqeust;
