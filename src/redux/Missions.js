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

const MissionReducer = createSlice({
  name: 'Missions',
  initialState: {},
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const newMission = state.FetchMissions.map((mission) => {
        if (mission.id === id) return { ...mission, reserved: true };
        return { ...mission };
      });
      return { ...state, FetchMissions: [...newMission] };
    },
    leaveMission: (state, action) => {
      const id = action.payload;
      const newMission = state.FetchMissions.map((mission) => {
        if (mission.id === id) return { ...mission, reserved: false };
        return { ...mission };
      });
      return { ...state, FetchMissions: [...newMission] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.fulfilled, (states, action) => ({
        FetchMissions: [...action.payload],
      }
      ));
  },
});

export const { joinMission, leaveMission } = MissionReducer.actions;

export default MissionReducer;
