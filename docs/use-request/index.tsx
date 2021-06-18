import React, { ReactElement } from 'react'
import Mock from 'mockjs';
import {useRequest} from 'react-usefull-hooks'
interface Props {
  
}

export default function RequestDemo({}: Props): ReactElement {
  function getUsername(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  }
  const { resData: appInfo = {} as any, sendRequest: appInfoRun } = useRequest<string>({
    request: getUsername,
    manul: true,
  });
  return (
    <div>
      <div>Username: {appInfo}</div>
    </div>
  )
}
