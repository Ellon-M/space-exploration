import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FetchMissions } from '../redux/missions/Missions';
import Missions from './Missions';

function MissionList() {
  const dispatch = useDispatch();

  const listMissions = useSelector((state) => state.missions.FetchMissions);

  useEffect(() => {
    if (listMissions.length === 0) {
      dispatch(FetchMissions());
    }
  }, [dispatch, listMissions.length]);

  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <thead>
        { listMissions && listMissions.map((mission) => (
          <Missions
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </thead>

    </Table>
  );
}

export default MissionList;
