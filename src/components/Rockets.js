import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import styles from './styles/rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);

  useEffect(() => {
    dispatch(getAllRockets());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.rocketsList}>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            type={rocket.type}
            description={rocket.description}
            images={rocket.images}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
