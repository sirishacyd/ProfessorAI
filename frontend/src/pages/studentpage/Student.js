import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './student.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import {Typography} from "@mui/material";
import image from './courses.jpg';

const Student = () => {
  const { currentUser } = useAuth();
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const studentId = currentUser?.student_id;
  const studentName = currentUser?.first_name || "Student";
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const colors = ['#007bff','#FF7F50','#008080'];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
            `${backendUrl}/api/student/${studentId}/courses`, {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
              }}
        );

        if(response.data.length > 0){
          setCourses(response.data);
          setErrorMessage('');
        } else {
          setErrorMessage('You are not enrolled in any courses at the moment!');
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'An unexpected error occurred while retrieving the courses.');
      }
    };

    fetchCourses();
  }, [studentId, backendUrl]);

  const history = useHistory();

  const navigateToCourse = (courseId) => {
    history.push(`/ViewCourses/${courseId}`);
  };

  return (
      <div className="home">
        <div className="content">
          <div className="welcome">
            <Typography variant="h4">Welcome {studentName}!</Typography> <br/>
            <Typography variant="h5">Exciting Learning Ahead! Here is your list of enrolled courses.</Typography>
          </div>
          {errorMessage &&  <Alert severity="error" variant="filled">{errorMessage}</Alert>}
          <div className="courses">
            {courses.map((course, index) => (
                <div
                    key={course.course_id}
                    className="course"
                    onClick={() => navigateToCourse(course.course_id)}
                    style={{cursor: 'pointer'}}>
                  <h3 style={{backgroundColor: colors[index % colors.length]}}>
                    {course.course_code}
                  </h3>
                  <p>Course Name: {course.course_name}</p>
                  <img
                      /* Image by <a href="https://www.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_10780257.htm#fromView=search&page=1&position=16&uuid=f93a28e2-9005-4fe4-b2a5-73798b57d283">Image by vectorjuice on Freepik</a>*/
                      src={image}
                      alt="ProfilePicture"
                      style={{width: '50%', height: 'auto'}}/>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Student;