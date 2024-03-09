import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './student.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const Student = () => {
  const { currentUser } = useAuth();
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const studentId = currentUser?.student_id;
  const studentName = currentUser?.first_name || "Student";
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


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


  return (
      <div className="home">
        <div className="content">
          <div className="welcome">
            <h2>Welcome {studentName}!<br/> Exciting Learning Ahead! Here is your list of enrolled courses.</h2>
          </div>
          {errorMessage &&  <Alert severity="error" variant="filled">{errorMessage}</Alert>}
          <div className="courses">
            {courses.map((course) => (
                <div key={course.course_id} className="course">
                  <h3>{course.course_code}</h3>
                  <p>Course Name: {course.course_name}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Student;
