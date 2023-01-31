import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/rockets.module.css';

const Rocket = ({
  name, type, images, description,
}) => (
  <li className={styles.rocket}>
    <div className={styles.rocketImg}>
      <img src={images[1]} alt={`SpaceX ${type}: ${name}`} />
    </div>
    <div className={styles.rocketDetails}>
      <h4 className={styles.rocketName}>{name}</h4>
      <p className={styles.rocketDesc}>{description}</p>
      <button className={styles.rocketReserveBtn} type="button">Reserve Rocket</button>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.arrayOf([PropTypes.string.isRequired]).isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
