import React, { useEffect } from 'react';
import { getProduct } from '../../store/thunk/assets';
import { useAppDispatch } from '../../utils/hook';

const Page4 = () => {

  const dispatch = useAppDispatch()

  useEffect (() => {
    dispatch(getProduct('')) //запрос изделия
  }, [])
  
  return (
    <div>
        <h1>Пассивация</h1>
    </div>
  );
};

export default Page4;