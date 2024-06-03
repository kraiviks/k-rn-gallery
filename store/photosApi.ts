import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const _accessKey = 'D1qi9dy8yHfSFfRxNs8Ad0PGfxLFfFYEFxreZxBOjXo';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  tagTypes: ['Photos'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  endpoints: (builder: any) => ({
    getPhotos: builder.query({
      query: () => `photos/?per_page=30&client_id=${_accessKey}`,
    }),
  }),
});

export const {useGetPhotosQuery} = photosApi;
