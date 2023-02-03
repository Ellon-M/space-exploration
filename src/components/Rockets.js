import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import styles from './styles/rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.rockets.rockets);
  const rockets = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : initialState;

  useEffect(() => {
    if (rockets?.length === 0) {
      dispatch(getAllRockets());
    }
  }, [dispatch, rockets?.length]);

  return (
    <>
      <ul className={styles.rocketsList}>
        {rockets && rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            type={rocket.type}
            description={rocket.description}
            images={rocket.images}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
