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
import YourSubject from "../Pages/YourSubject/YourSubject";
import PrivateRoute from "./PrivateRoute";
import ScienceWorksheet from "../Pages/WorksheetsLink/ScienceWorksheet";
import EnglishWorksheet from "../Pages/WorksheetsLink/EnglishWorksheet";
import SubjectAdd from "../Pages/SubjectAdd/SubjectAdd";
import TableData from "../Pages/SubjectAdd/TableData";
import ScienceLessonPlan from "../Pages/SubjectAdd/ScienceLessonPlan";
import EnglishLessonPlan from "../Pages/SubjectAdd/EnglishLessonPlan";



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
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path: '/yourclass',
                element: <PrivateRoute><YourClass></YourClass></PrivateRoute>
            },
            {
                path: '/sciencesyllabusbutton',
                element: <ScienceSyllabusButton></ScienceSyllabusButton>
            },
            {
                path: 'yoursubject/sciencesyllabusbutton',
                element: <ScienceSyllabusButton></ScienceSyllabusButton>
            },
            {
                path: 'yoursubject/englishsyllabusbutton',
                element: <EnglishSyllabusButton></EnglishSyllabusButton>
            },
            {
                path: 'yoursubject/scienceworksheetlink',
                element: <ScienceWorksheet></ScienceWorksheet>
            },
            {
                path: 'yoursubject/englishworksheetlink',
                element: <EnglishWorksheet></EnglishWorksheet>
            },

            {
                path: 'yoursubject/sciencelessonplan',
                element: <ScienceLessonPlan></ScienceLessonPlan>
            },
            {
                path: 'yoursubject/englishlessonplan',
                element: <EnglishLessonPlan></EnglishLessonPlan>
            },

            {
                path: '/englishsyllabusbutton',
                element: <EnglishSyllabusButton></EnglishSyllabusButton>
            },
            {
                path: '/recentmessage',
                element: <PrivateRoute><RecentMessage></RecentMessage></PrivateRoute>
            },
            {
                path: '/recentformmessage',
                element: <PrivateRoute><RecentMessageform></RecentMessageform></PrivateRoute>
            },
            {
                path: '/yoursubject',
                element: <PrivateRoute><YourSubject></YourSubject></PrivateRoute>
            },
            {
                path: '/scienceworksheetlink',
                element: <ScienceWorksheet></ScienceWorksheet>
            },
            {
                path: '/englishworksheetlink',
                element: <EnglishWorksheet></EnglishWorksheet>
            },
            {
                path: '/yoursubject',
                element: <PrivateRoute><YourSubject></YourSubject></PrivateRoute>
            },

            {
                path: '/subjectadd',
                element: <PrivateRoute><SubjectAdd></SubjectAdd></PrivateRoute>
            },
            {
                path: '/tabledata',
                element: <PrivateRoute><TableData></TableData></PrivateRoute>
            },
            {
                path: '/sciencelessonplan',
                element: <PrivateRoute><ScienceLessonPlan></ScienceLessonPlan></PrivateRoute>
            },
            {
                path: '/englishlessonplan',
                element: <PrivateRoute><EnglishLessonPlan></EnglishLessonPlan></PrivateRoute>
            },

            // {
            //     path: '/sciencelesonplan',
            //     element: <PrivateRoute><ScienceLessonPlan></ScienceLessonPlan></PrivateRoute>
            // },



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