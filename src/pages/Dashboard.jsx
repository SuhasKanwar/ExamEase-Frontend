import React from 'react';
import { Bell, BookOpen, Calendar, Clock, Users, Layout, FileText, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const upcomingExams = [
    {
      id: 1,
      subject: 'Applied Mechanics',
      type: 'Online Exam',
      subtitle: 'ME- 1st Term, Mid Term Exam | MCQ',
      date: '20-09-2020',
      duration: '3 Hours',
      marks: '200',
      time: '10:00 AM',
      checkInTime: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      subject: 'Applied Mechanics',
      type: 'Online Exam',
      subtitle: 'ME- 1st Term, Mid Term Exam | MCQ',
      date: '20-09-2020',
      duration: '3 Hours',
      marks: '200',
      time: '10:00 AM',
      checkInTime: '10:00 AM',
      status: 'upcoming'
    }
  ];

  const completedExams = [
    {
      id: 3,
      subject: 'Applied Mechanics',
      type: 'Pen-Paper based',
      subtitle: 'ME- 1st Term, Mid Term Exam | MCQ',
      date: '20-09-2020',
      duration: '3 Hours',
      marks: '200',
      time: '10:00 AM',
      status: 'completed'
    }
  ];

  const Sidebar = () => (
    <div className="w-16 bg-gray-900 h-screen fixed left-0 top-0 border-r border-gray-800 flex flex-col items-center py-4 space-y-8">
      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
    
    </div>
  );

  const Header = () => (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800">
     <Link to={"/"}><h1 className="text-xl font-semibold text-white">ExamEase</h1> </Link>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-300 hover:text-gray-100">Instructions</button>
        <button className="text-sm text-gray-300 hover:text-gray-100">Report Issue</button>
        <button className="text-sm text-gray-300 hover:text-gray-100">Connectivity test</button>
        <Bell className="w-5 h-5 text-gray-300 hover:text-gray-100" />
      </div>
    </header>
  );

  const ExamCard = ({ exam }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{exam.subject}</h3>
          <p className="text-sm text-gray-400">{exam.subtitle}</p>
          <span className="inline-block mt-2 text-emerald-400 text-sm bg-emerald-900/50 px-3 py-1 rounded-full">
            {exam.type}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded bg-gray-700 hover:bg-gray-600">
            <FileText className="w-4 h-4 text-gray-300" />
          </button>
          <button className="p-2 rounded bg-gray-700 hover:bg-gray-600">
            <Clock className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-400">Date:</p>
          <p className="font-medium text-gray-200">{exam.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Duration:</p>
          <p className="font-medium text-gray-200">{exam.duration}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Marks:</p>
          <p className="font-medium text-gray-200">{exam.marks}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Time:</p>
          <p className="font-medium text-gray-200">{exam.time}</p>
        </div>
      </div>

      {exam.status === 'upcoming' && (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Check-in Time:</p>
            <p className="text-blue-400 font-medium">{exam.checkInTime}</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-blue-400 bg-blue-900/50 rounded hover:bg-blue-900">
              Verification
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Start
            </button>
          </div>
        </div>
      )}

      {exam.status === 'completed' && (
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 text-blue-400 bg-blue-900/50 rounded hover:bg-blue-900">
            Verification
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Resume
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <div className="ml-16">
        <Header />
        <main className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Upcoming Exams to Proctor</h2>
              <div className="flex items-center text-blue-400">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">Exam "Applied Mechanics" starts in: 10 minutes</span>
              </div>
            </div>
            {upcomingExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Completed Proctoring</h2>
            {completedExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;