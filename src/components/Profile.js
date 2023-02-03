import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  // const dispatch = useDispatch();

  const initialState = useSelector((state) => state.rockets.rockets);
  const rockets = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : initialState;
  const listMissions = useSelector((mission) => mission.missions.FetchMissions);
  const joinedMissions = listMissions?.filter((mission) => mission.reserved);

  return (
    <>
      <div className="profile">
        <section className="section-rockets">
          <h3 className="profile-heading">Reserved Rockets</h3>
          <Table hover size="xl">
            <tbody>
              {rockets && rockets.map((rocket) => (rocket.reserved ? <tr key={rocket.id} className="profile-rows">{rocket.name}</tr> : <></>))}
            </tbody>
          </Table>
        </section>
        <section className="section-missions">
          <h3 className="profile-heading">Joined Missions</h3>
          <Table striped hover size="xl">
            <tbody>
              { joinedMissions && joinedMissions?.map((mission) => (
                <tr key={mission.id} className="profile-rows">{mission.name}</tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    </>
  );
};

export default Profile;
