import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/Missions';

const Missions = (prop) => {
  const dispatch = useDispatch();
  const {
    id, name, description, reserved,
  } = prop.mission;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {reserved ? (<p className="member flex">Active member</p>) : (<p className="member flex">Not a member</p>)}
      </td>
      <td>
        {reserved
          ? (<button type="button" className="Join-mission flex" onClick={() => dispatch(leaveMission(id))}>Leave Mission</button>)
          : (<button type="button" className="Join-mission flex" onClick={() => dispatch(joinMission(id))}>Join mission</button>)}
      </td>
    </tr>
  );
};
Missions.propType = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Missions;
