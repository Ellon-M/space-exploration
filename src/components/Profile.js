import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllRockets } from '../redux/rockets/rockets';
import { FetchMissions } from '../redux/Missions';

const Profile = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.rockets.rockets);
  // const rockets = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : initialState;
  const listMissions = useSelector((mission) => mission.missions.FetchMissions);

  useEffect(() => {
    dispatch(getAllRockets());
    dispatch(FetchMissions());
  }, [dispatch]);

  return (
    <>
      <div className="profile">
        <section className="section-rockets">
          <Table striped bordered hover size="xl">
            <thead>
              {initialState && initialState.map((rocket) => (
                rocket.reserved ? <tr key={rocket.id}>{rocket.name}</tr> : <></>
              ))}
            </thead>
          </Table>
        </section>
        <section className="section-missions">
          <Table striped bordered hover size="xl">
            <thead>
              { listMissions && listMissions.map((mission) => (
                mission.reserved ? <tr key={mission.id}>{mission.name}</tr> : <></>
              ))}
            </thead>
          </Table>
        </section>
      </div>
    </>
  );
};

export default Profile;
