import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrll() / api / books}`,
});

const bookApi = createApi({
  reducerPath: "bookApi",
});
