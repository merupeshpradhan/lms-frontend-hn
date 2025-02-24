import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lectures: [],
};

export const getCourseLecture = createAsyncThunk(
  "/course/lecture/get",
  async (courseId) => {
    try {
      const response = axiosInstance.get(`/courses/${courseId}`);

      toast.promise(response, {
        loading: "Fetching the lectures...",
        success: "Lectures fetched successfully",
        error: "Failed to fetch lectures",
      });

      //   const response = await res;
      //   return response.data;
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    try {
      const formData = new FormData();
      formData.append("lecture", data.lecture);
      formData.append("title", data.title);
      formData.append("description", data.description);

      const res = axiosInstance.post(`/courses/${data.id}`, formData);

      toast.promise(res, {
        loading: "Adding the lecture...",
        success: "Lecture added successfully",
        error: "Failed to add lecture",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const deleteCourseLecture = createAsyncThunk(
    "/course/lecture/delete",
    async (data) => {
      console.log(data);
      try {
        const res = axiosInstance.delete(
          `/courses/?courseId=${data.courseId}&lectureId=${data.lectureId}`
        );
  
        toast.promise(res, {
          loading: "Deleting the lecture...",
          success: "Lecture deleted successfully",
          error: "Failed to delete lecture",
        });
  
        const response = await res;
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  );

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.lectures;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.course?.lectures;
      });
  },
});

export default lectureSlice.reducer;
