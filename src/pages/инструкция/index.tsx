import React, { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hook';
import { getProduct } from '../../store/thunk/assets';

const Page6 = () => {

  const dispatch = useAppDispatch()

  useEffect (() => {
    dispatch(getProduct('')) //запрос изделия
  }, [])
  
  return (
    <div>
        <h1>Инструкция</h1>
    </div>
  );
};

export default Page6;