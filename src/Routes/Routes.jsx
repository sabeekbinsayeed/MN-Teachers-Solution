import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Applications from "../Pages/Applications/Applications";
import Exams from "../Pages/Exams/Exams";
import Academics from "../Pages/Academics/Academics";
import Routine from "../Pages/Routine/Routine";
import Events from "../Pages/Events/Events";
import Syllabus from "../Pages/Syllabus/Syllabus";
import ClassTest from "../Pages/ClassTest/ClassTest";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import AddClass from "../Pages/AddClass/AddClass";
import YourClass from "../Pages/YourClass/YourClass";
import ScienceSyllabusButton from "../Pages/Syllabus/ScienceSyllabusButton";
import RecentMessage from "../Pages/RecentMessage/RecentMessage";
import RecentMessageform from "../Pages/RecentMessage/RecentMessageform";
import EnglishSyllabusButton from "../Pages/Syllabus/EnglishSyllabusButton";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/applications',
                element: <Applications></Applications>
            },
            {
                path: '/exams',
                element: <Exams></Exams>
            },
            {
                path: '/academics',
                element: <Academics></Academics>
            },
            {
                path: '/routine',
                element: <Routine></Routine>
            },
            {
                path: '/classtest',
                element: <ClassTest></ClassTest>
            },
            {
                path: '/syllabus',
                element: <Syllabus></Syllabus>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addclass',
                element: <AddClass></AddClass>
            },
            {
                path: '/yourclass',
                element: <YourClass></YourClass>
            },
            {
                path: '/sciencesyllabusbutton',
                element: <ScienceSyllabusButton></ScienceSyllabusButton>
            },
            {
                path: '/englishsyllabusbutton',
                element: <EnglishSyllabusButton></EnglishSyllabusButton>
            },
            {
                path: '/recentmessage',
                element: <RecentMessage></RecentMessage>
            },
            {
                path: '/recentformmessage',
                element: <RecentMessageform></RecentMessageform>
            },



        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <MyAppointment></MyAppointment>
    //         },
    //         {
    //             path: '/dashboard/allusers',
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         },
    //     ]
    // }
])

export default router;