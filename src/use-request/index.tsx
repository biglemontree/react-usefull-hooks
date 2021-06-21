import React, { ReactElement } from 'react';
import Mock from 'mockjs';
import { useRequest } from 'react-usefull-hooks';
interface Props {}
declare interface ResponseWrap<T> {
  code?: number;
  data: T;
  msg?: string;
  success: boolean;
  traceId: string;
}
export default () => {
  function getUsername(): Promise<{ data: ResponseWrap<any> }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            data: Mock.mock('@name'),
          },
          success: true,
          traceId: 'xxxxxx',
        });
      }, 1000);
    });
  }
  const { resData: appInfo = {} as any, sendRequest: appInfoRun } =
    useRequest<string>({
      request: getUsername,
      manul: true,
    });
  console.log(appInfo);

  return (
    <div>
      <div>Username:</div>
    </div>
  );
};
