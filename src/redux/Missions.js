import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const AvatarURL = 'https://api.spacexdata.com/v3/missions';

export const FetchMissions = createAsyncThunk('missions/GET_MISSIONS', async () => {
  const MissionResults = await fetch(AvatarURL);
  const MissionData = await MissionResults.json();
  const Mission = [];
  MissionData.forEach((mission) => {
    const missions = {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    };
    Mission.push(missions);
  });
  return Mission;
});

console.log('hello');

const MissionReducer = createSlice({
  name: 'Missions',
  initialState: { mission: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.fulfilled, (state, action) => {
        console.log(state, action.payload);
      });
  },
});

export default MissionReducer;