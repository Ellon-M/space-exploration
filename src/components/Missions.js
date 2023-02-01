import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Missions = (prop) => {
  const { name, description } = prop.mission;
  return (
    <>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <p className="member flex">Not a member</p>
      </td>
      <td>
        <p className="Join-mission flex">Join mission</p>
      </td>
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
