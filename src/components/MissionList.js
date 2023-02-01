import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FetchMissions } from '../redux/Missions';
import Missions from './Missions';

function MissionList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const listMissions = useSelector((mission) => mission.missions.FetchMissions);

  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>Name</th>
          <th colSpan={5}>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <thead>
        { listMissions && listMissions.map((mission) => (
          <tr key={mission.id}>
            <Missions mission={mission} />
          </tr>
        ))}
      </thead>

    </Table>
  );
}

export default MissionList;
