import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';

export interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  description?: string;
}

const photosSlice = createSlice({
  initialState: {
    photo: {} as UnsplashPhoto,
  },
  name: 'photos',
  reducers: {
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const {setPhoto} = photosSlice.actions;

export const selectPhoto = (state: RootState) => state.photos.photo;

export default photosSlice.reducer;
