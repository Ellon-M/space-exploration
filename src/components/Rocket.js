import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve, cancel } from '../redux/rockets/rockets';
import styles from './styles/rockets.module.css';

const Rocket = ({
  id, name, type, images, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserve((id)));
  };

  const handleCancel = () => {
    dispatch(cancel((id)));
  };

  return (
    <li className={styles.rocket}>
      <div className={styles.rocketImg}>
        <img src={images[1]} alt={`SpaceX ${type}: ${name}`} />
      </div>
      <div className={styles.rocketDetails}>
        <h4 className={styles.rocketName}>{name}</h4>
        <p className={styles.rocketDesc}>
          {reserved ? <span className={styles.reservedBanner}>reserved</span> : <></>}
          {description}
        </p>
        { reserved
          ? <button className={styles.rocketCancelBtn} type="button" onClick={handleCancel}>Cancel Reservation</button>
          : <button className={styles.rocketReserveBtn} type="button" onClick={handleReserve}>Reserve Rocket</button> }
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
