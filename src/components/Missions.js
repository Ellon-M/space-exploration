import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/Missions';

const Missions = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {reserved ? (<button type="button" className="member flex">Active member</button>)
          : (<button type="button" className="not-member flex">Not a member</button>)}
      </td>
      <td>
        {reserved
          ? (<button type="button" className="leave-mission flex" onClick={() => dispatch(leaveMission(id))}>Leave Mission</button>)
          : (<button type="button" className="Join-mission flex" onClick={() => dispatch(joinMission(id))}>Join mission</button>)}
      </td>
    </tr>
  );
};
Missions.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Missions;
