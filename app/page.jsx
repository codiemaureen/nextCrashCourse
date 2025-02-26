'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./component/Courses";
import CourseSearch from "./component/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] =  useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () =>  {
      const res = await fetch('/api/courses');
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, [])

  if(loading){
    return <LoadingPage />;
  }

  return (
    <div>
     <h1>Welcome To Codie Codes</h1>
     <CourseSearch getSearchResults={(results) => setCourses(results)}/>
     <Courses courses={courses}/>
    </div>
  )
}

export default HomePage;
