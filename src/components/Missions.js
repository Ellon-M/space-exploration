import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Missions = () => (
  <Table striped bordered hover size="xl">
    <thead>
      <tr>
        <th>{}</th>
        <th colSpan={5}>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td colSpan={5}>Otto</td>
        <td>@mdo</td>
        <td>head</td>
      </tr>
    </tbody>
  </Table>
);

export default Missions;
