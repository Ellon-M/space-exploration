import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Missions = (prop) => {
  const { name, description } = prop.mission;
  return (
    <>
      <td>{name}</td>
      <td colSpan={5}>{description}</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </>
  );
};
Missions.propType = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Missions;
