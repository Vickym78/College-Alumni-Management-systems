 /*import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/globalurl';

console.log(baseUrl);


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        userType: "alumnus",
        course_id: "",
    });
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/auth/signup', values);

            if (res.data?.email) {
                toast.warning("Email Already Exists");
                return;
            }

            if (res.data?.signupStatus) {
                toast.success(res.data.message || "Signup Successful");
                setTimeout(() => navigate("/login", { state: { action: "navtologin" } }), 2000);
            } else {
                toast.error(res.data?.message || "An error occurred");
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to connect to the server.");
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('http://localhost:5000/auth/courses');
                //const {data}=await res.json();
               // console.log(data);
                if (Array.isArray(res.data)) {
                    
                    setCourses(res.data);
                } else {
                    console.error("Invalid courses data", res.data);
                }
            } catch (err) {
                console.error("Error fetching courses:", err);
                toast.error("Failed to load courses.");
            }
        };

        fetchCourses();
    }, []);

    return (
        <>
            <ToastContainer position="top-center" hideProgressBar />
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Create Account</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="container col-lg-6 col-md-8 col-sm-10">
                                    <form onSubmit={handleSubmit} id="create_account">
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Name</label>
                                            <input
                                                value={values.name}
                                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="control-label">Email</label>
                                            <input
                                                value={values.email}
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="control-label">Password</label>
                                            <input
                                                value={values.password}
                                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userType" className="control-label">User Type</label>
                                            <select
                                                value={values.userType}
                                                onChange={(e) => setValues({ ...values, userType: e.target.value })}
                                                className="custom-select"
                                                id="userType"
                                                name="userType"
                                                required
                                            >
                                                <option value="" disabled>Please select</option>
                                                <option value="alumnus">Alumnus</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </div>
                                        {values.userType === "alumnus" && (
                                            <div className="form-group">
                                                <label htmlFor="course_id" className="control-label">Course</label>
                                                <select
                                                    value={values.course_id}
                                                    onChange={(e) => setValues({ ...values, course_id: e.target.value })}
                                                    className="form-control"
                                                    id="course_id"
                                                    name="course_id"
                                                    required
                                                >
                                                    <option value="" disabled>Select course</option>
                                                    {courses.map((course) => (
                                                        <option key={course.id} value={course.id}>
                                                            {course.course}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        <hr className="divider" />
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 text-center">
                                                <button type="submit" className="btn btn-info btn-block">Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;

*/
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/globalurl';

console.log(baseUrl);

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        userType: "alumnus", // Defaulting to "alumnus" as the only option
        course_id: "", // This will be set to the AIML course ID after fetching courses
    });
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/auth/signup', values);

            if (res.data?.email) {
                toast.warning("Email Already Exists");
                return;
            }

            if (res.data?.signupStatus) {
                toast.success(res.data.message || "Signup Successful");
                setTimeout(() => navigate("/login", { state: { action: "navtologin" } }), 2000);
            } else {
                toast.error(res.data?.message || "An error occurred");
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to connect to the server.");
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('http://localhost:5000/auth/courses');
                if (Array.isArray(res.data)) {
                    setCourses(res.data);
                    
                    // Set the default course as AIML if available
                    const aimlCourse = res.data.find(course => course.course.toLowerCase() === 'aiml');
                    if (aimlCourse) {
                        setValues(prevValues => ({
                            ...prevValues,
                            course_id: aimlCourse.id
                        }));
                    }
                } else {
                    console.error("Invalid courses data", res.data);
                }
            } catch (err) {
                console.error("Error fetching courses:", err);
                toast.error("Failed to load courses.");
            }
        };

        fetchCourses();
    }, []);

    return (
        <>
            <ToastContainer position="top-center" hideProgressBar />
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Create Account</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="container col-lg-6 col-md-8 col-sm-10">
                                    <form onSubmit={handleSubmit} id="create_account">
                                        <div className="form-group">
                                            <label htmlFor="name" className="control-label">Name</label>
                                            <input
                                                value={values.name}
                                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="control-label">Email</label>
                                            <input
                                                value={values.email}
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="control-label">Password</label>
                                            <input
                                                value={values.password}
                                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                required
                                            />
                                        </div>
                                        {/* Removed Admin option from the dropdown */}
                                        <div className="form-group">
                                            <label htmlFor="userType" className="control-label">User Type</label>
                                            <select
                                                value={values.userType}
                                                onChange={(e) => setValues({ ...values, userType: e.target.value })}
                                                className="custom-select"
                                                id="userType"
                                                name="userType"
                                                required
                                                disabled // The "userType" is set to "alumnus" by default and cannot be changed
                                            >
                                                <option value="alumnus">Alumnus</option>
                                            </select>
                                        </div>
                                        {values.userType === "alumnus" && (
                                            <div className="form-group">
                                                <label htmlFor="course_id" className="control-label">Course</label>
                                                <select
                                                    value={values.course_id}
                                                    onChange={(e) => setValues({ ...values, course_id: e.target.value })}
                                                    className="form-control"
                                                    id="course_id"
                                                    name="course_id"
                                                    required
                                                >
                                                    <option value="" disabled>Select course</option>
                                                    {courses.map((course) => (
                                                        <option key={course.id} value={course.id}>
                                                            {course.course}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        <hr className="divider" />
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 text-center">
                                                <button type="submit" className="btn btn-info btn-block">Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
