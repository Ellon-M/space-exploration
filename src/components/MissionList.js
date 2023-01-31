import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchMIssions } from '../redux/Missions';
import Missions from './Missions';

function MissionList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMIssions());
  }, [dispatch]);

  const listMissions = useSelector((state) => console.log(state));

  return (
    <>
      <ul>
        {listMissions.map((mission) => (
          <li key={mission.id}>
            {' '}
            <Missions name={mission} />
          </li>
        ))}

      </ul>
    </>
  );
}

export default MissionList;
