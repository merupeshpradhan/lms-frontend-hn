import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLecture,
} from "../../Redux/Slices/LectureSlice";

function Displaylectures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  async function handleLectureDelete(courseId, lectureId) {
    const data = { courseId, lectureId };
    await dispatch(
      deleteCourseLecture({ courseId: courseId, lectureId: lectureId })
    );
    await dispatch(getCourseLecture(courseId));
  }

  useEffect(() => {
    // if (!state) navigate("/courses");
    (async () => {
      await dispatch(getCourseLecture(state._id));
    })();
  }, []);

  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
        {/* displaying the course name */}
        <h1 className="text-center text-2xl font-semibold text-yellow-500">
          Course Name : {state?.title}
        </h1>

        {/* 
            also using this one for all next div 
           {lectures && lectures.length > 0 &&   
       */}
        <div className="flex justify-center gap-10 w-full">
          {/* left section for playing the video and displaying course details to admin */}
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            <video
              className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              src={lectures && lectures[currentVideoIndex]?.lecture?.secure_url}
              controls
              disablePictureInPicture
              muted
              controlsList="nodownload"
            ></video>
            <div>
              <h1>
                <span className="text-yellow-500">Title : </span>
                {lectures && lectures[currentVideoIndex]?.title}
              </h1>
              <p>
                {" "}
                <span className="text-yellow-500 line-clamp-4">
                  Description :{" "}
                </span>
                {lectures && lectures[currentVideoIndex]?.description}
              </p>
            </div>
          </div>

          {/* right section for displaying all the lectures of the course */}
          <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
            <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
              <p>Lectures List</p>
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    navigate("/course/addlecture", {
                      state: { ...courseDetails },
                    })
                  }
                  className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                >
                  Add New Lecture
                </button>
              )}
            </li>
            {lectures &&
              lectures.map((element, index) => {
                return (
                  <li className="space-y-2" key={element._id}>
                    <p
                      className="cursor-pointer"
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <span className="text-yellow-500">
                        {" "}
                        Lecture {index + 1} :{" "}
                      </span>
                      {element?.title}
                    </p>
                    {role === "ADMIN" && (
                      <button
                        onClick={() =>
                          handleLectureDelete(state?._id, lecture?._id)
                        }
                        className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                      >
                        Delete Lecture
                      </button>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Displaylectures;
