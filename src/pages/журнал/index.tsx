import React, { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hook';
import { getProduct } from '../../store/thunk/assets';

const Page5= () => {

  const dispatch = useAppDispatch()

  useEffect (() => {
    dispatch(getProduct('')) //запрос изделия
  }, [])
  
  return (
    <div>
        <h1>Журнал</h1>
    </div>
  );
};

export default Page5;