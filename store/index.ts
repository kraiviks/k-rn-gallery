import {configureStore} from '@reduxjs/toolkit';
import photosSlice from './photosSlice';
import {photosApi} from './photosApi';

const store = configureStore({
  reducer: {
    photos: photosSlice,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
