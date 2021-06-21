/**
 * @description 倒计时hooks
 */

import { useEffect, useState, useRef, useCallback } from 'react';

const useCountDown = () => {
  // 单位:秒
  const [countDownTime, setCountDownTime] = useState<number>(0);
  // 倒计时中
  const [isCounting, setIsCounting] = useState<boolean | null>(null);
  const timer = useRef<NodeJS.Timer | null | number>(null);

  useEffect(
    () => () => {
      clearTimer();
    },
    [],
  );

  const clearTimer = () => {
    setIsCounting(false);
    timer && timer.current && clearInterval(timer.current as number);
  };

  const startTimer = useCallback(
    (time: number = 60) => {
      if (isCounting) {
        clearTimer();
      }
      timer.current = setInterval(() => {
        setIsCounting(true);
        if (time === 0) {
          setIsCounting(false);
          return clearTimer();
        }
        setCountDownTime(time--);
      }, 1000);
    },
    [isCounting, setCountDownTime, countDownTime, setIsCounting],
  );

  return { countDownTime, isCounting, startTimer, clearTimer };
};

export default useCountDown;
