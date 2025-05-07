import React from 'react';
import { Bell, BookOpen, Calendar, Clock, Users, Layout, FileText, Settings, HelpCircle } from 'lucide-react';

const ProctorDashboard = () => {
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
    <div className="w-16 bg-white h-screen fixed left-0 top-0  flex flex-col items-center py-4 space-y-8">
      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
      <nav className="flex flex-col space-y-6">
        <BookOpen className="w-6 h-6 text-gray-400" />
        <Layout className="w-6 h-6 text-gray-400" />
        <Calendar className="w-6 h-6 text-gray-400" />
        <Users className="w-6 h-6 text-gray-400" />
        <FileText className="w-6 h-6 text-gray-400" />
        <Settings className="w-6 h-6 text-gray-400" />
        <HelpCircle className="w-6 h-6 text-gray-400" />
      </nav>
    </div>
  );

  const Header = () => (
    <header className="flex shadow justify-between items-center px-6 py-4 bg-white ">
      <h1 className="text-2xl font-semibold">Proctor</h1>
      <div className="flex items-center space-x-4">
        <button className="text-md">Instructions</button>
        <button className="text-md">Report Issue</button>
        <button className="text-md">Connectivity test</button>
        <Bell className="w-5 h-5 text-gray-500" />
      </div>
    </header>
  );

  const ExamCard = ({ exam }) => (
    <div className="bg-white p-6 rounded-lg  mb-4 shadow ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-semibold">{exam.subject}</h3>
          <p className="text-md text-gray-500">{exam.subtitle}</p>
          <span className="inline-block mt-2 text-emerald-500 text-sm bg-emerald-50 px-3 py-1 rounded-full">
            {exam.type}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded bg-gray-100">
            <FileText className="w-4 h-4" />
          </button>
          <button className="p-2 rounded bg-gray-100">
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-lg text-gray-500">Date:</p>
          <p className="font-medium text-lg">{exam.date}</p>
        </div>
        <div>
          <p className="text-lg text-gray-500">Duration:</p>
          <p className="font-medium text-lg">{exam.duration}</p>
        </div>
        <div>
          <p className="text-lg text-gray-500">Marks:</p>
          <p className="font-medium text-lg">{exam.marks}</p>
        </div>
        <div>
          <p className="text-lg text-gray-500">Time:</p>
          <p className="font-medium text-lg">{exam.time}</p>
        </div>
      </div>

      {exam.status === 'upcoming' && (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Check-in Time:</p>
            <p className="text-violet-600 font-medium">{exam.checkInTime}</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-violet-600 bg-blue-50 rounded">
              Verification
            </button>
            <button className="px-4 py-2 text-white bg-violet-600 rounded">
              Start
            </button>
          </div>
        </div>
      )}

      {exam.status === 'completed' && (
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 text-violet-600 bg-blue-50 rounded">
            Verification
          </button>
          <button className="px-4 py-2 text-white bg-violet-600 rounded">
            Resume
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
 
      <div className="">
        <Header />
        <main className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Upcoming Exams to Proctor</h2>
              <div className="flex items-center text-violet-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-md">Exam "Applied Mechanics" starts in: 10 minutes</span>
              </div>
            </div>
            {upcomingExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Completed Proctoring</h2>
            {completedExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProctorDashboard;