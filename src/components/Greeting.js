import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>{data.message}</h1>
      <button type="button" onClick={() => dispatch(getMessage())}>
        Generate Greeting Message
      </button>
    </div>
  );
};

export default Greeting;