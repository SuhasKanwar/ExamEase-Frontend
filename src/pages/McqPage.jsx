"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Clock, ArrowLeft, ArrowRight, Check, Flag } from "lucide-react"

// Sample questions data - in a real app, this would be fetched from an API or file
const examData = {
  questions: [
    {
      question: "What is the primary goal of software engineering?",
      options: [
        "Faster coding",
        "Systematic, disciplined, and quantifiable development",
        "Writing as many lines as possible",
        "Learning programming languages",
      ],
      answer: "Systematic, disciplined, and quantifiable development",
    },
    {
      question: "Which software development model is best suited for projects with unclear requirements?",
      options: ["Waterfall", "V-Model", "Spiral", "Big Bang"],
      answer: "Spiral",
    },
    {
      question: "Which one is not a software development life cycle (SDLC) phase?",
      options: ["Requirement Analysis", "Design", "Execution", "Testing"],
      answer: "Execution",
    },
    {
      question: "What is the purpose of UML?",
      options: ["Code optimization", "Bug fixing", "Modeling software systems", "Testing"],
      answer: "Modeling software systems",
    },
    {
      question: "Which of the following is a non-functional requirement?",
      options: ["Login functionality", "Password reset", "System performance", "Profile creation"],
      answer: "System performance",
    },
    {
      question: "What does 'Agile' emphasize?",
      options: ["Heavy documentation", "Rigid planning", "Customer collaboration and flexibility", "Late testing"],
      answer: "Customer collaboration and flexibility",
    },
    {
      question: "Which testing is done by developers before handing over to QA?",
      options: ["Alpha testing", "Beta testing", "Unit testing", "Acceptance testing"],
      answer: "Unit testing",
    },
    {
      question: "What is 'coupling' in software design?",
      options: ["Interdependence between modules", "Data hiding", "Internal cohesion", "Inheritance"],
      answer: "Interdependence between modules",
    },
    {
      question: "What does SOLID stand for in object-oriented design?",
      options: [
        "Simple, Open, Linked, Inherited, Derived",
        "Single-responsibility, Open-closed, Liskov, Interface segregation, Dependency inversion",
        "Systematic, Objective, Logical, Integrated, Defined",
        "None of the above",
      ],
      answer: "Single-responsibility, Open-closed, Liskov, Interface segregation, Dependency inversion",
    },
    {
      question: "Which metric measures the number of defects found per KLOC?",
      options: ["MTBF", "Cyclomatic complexity", "Defect density", "Code churn"],
      answer: "Defect density",
    },
    {
      question: "What is refactoring?",
      options: [
        "Adding new features",
        "Rewriting code from scratch",
        "Changing code structure without changing behavior",
        "Debugging",
      ],
      answer: "Changing code structure without changing behavior",
    },
    {
      question: "Which one is NOT a type of software maintenance?",
      options: ["Corrective", "Adaptive", "Preventive", "Deterministic"],
      answer: "Deterministic",
    },
    {
      question: "In version control systems, what does 'commit' mean?",
      options: [
        "Delete the repository",
        "Push code to production",
        "Save changes to local repository",
        "Revert changes",
      ],
      answer: "Save changes to local repository",
    },
    {
      question: "Which of the following is a black-box testing technique?",
      options: ["Code walkthrough", "Equivalence partitioning", "Unit testing", "Cyclomatic complexity"],
      answer: "Equivalence partitioning",
    },
    {
      question: "Which principle says that a class should only have one reason to change?",
      options: ["Open-closed", "Single responsibility", "Liskov substitution", "Interface segregation"],
      answer: "Single responsibility",
    },
    {
      question: "What is the main benefit of using version control systems?",
      options: [
        "Speeds up coding",
        "Makes debugging easier",
        "Tracks changes and enables collaboration",
        "Reduces file size",
      ],
      answer: "Tracks changes and enables collaboration",
    },
    {
      question: "Which software model uses iterations and continuous feedback?",
      options: ["Waterfall", "V-Model", "Agile", "RAD"],
      answer: "Agile",
    },
    {
      question: "What is 'technical debt'?",
      options: [
        "Money owed for software licenses",
        "Cost of server downtime",
        "Extra development work due to poor code quality",
        "Cost of user training",
      ],
      answer: "Extra development work due to poor code quality",
    },
    {
      question: "Which of the following is not an Agile methodology?",
      options: ["Scrum", "Kanban", "Extreme Programming", "Waterfall"],
      answer: "Waterfall",
    },
    {
      question: "Which of these is used for continuous integration?",
      options: ["JIRA", "GitHub", "Jenkins", "Slack"],
      answer: "Jenkins",
    },
  ],
}

const McqPage = () => {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [flaggedQuestions, setFlaggedQuestions] = useState({})
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 minutes in seconds
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex,
    })
  }

  const handleFlagQuestion = () => {
    setFlaggedQuestions({
      ...flaggedQuestions,
      [currentQuestion]: !flaggedQuestions[currentQuestion],
    })
  }

  const handleNext = () => {
    if (currentQuestion < examData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    // Navigate to the results page with the answers using React Router
    navigate("/result", { state: { selectedAnswers } })
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const calculateProgress = () => {
    const answered = Object.keys(selectedAnswers).length
    const total = examData.questions.length
    return {
      answered,
      total,
      percentage: Math.round((answered / total) * 100),
    }
  }

  const progress = calculateProgress()

  // Get the current question from the data
  const question = examData.questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white p-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Software Engineering Exam</h1>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="font-mono font-bold text-red-400">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Question panel */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Question {currentQuestion + 1} of {examData.questions.length}
              </h2>
              <button
                onClick={handleFlagQuestion}
                className={`flex items-center space-x-1 px-3 py-1 rounded ${
                  flaggedQuestions[currentQuestion] ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-600"
                }`}
              >
                <Flag className="w-4 h-4" />
                <span>Flag</span>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-lg">{question.question}</p>
            </div>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`p-4 rounded-lg cursor-pointer flex items-center space-x-3 ${
                    selectedAnswers[currentQuestion] === idx
                      ? "bg-blue-50 border border-violet-300"
                      : "bg-white border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === idx ? "bg-violet-500" : "bg-gray-300"
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === idx && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                currentQuestion === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-violet-600 text-white hover:bg-violet-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentQuestion < examData.questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              >
                Submit Exam
              </button>
            )}
          </div>
        </div>

        {/* Question navigator panel */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Question Navigator</h3>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-violet-600 h-2 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>{progress.answered} answered</span>
                <span>{progress.total - progress.answered} remaining</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {examData.questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-full aspect-square flex items-center justify-center rounded-md text-sm font-medium ${
                    currentQuestion === idx
                      ? "bg-violet-600 text-white"
                      : flaggedQuestions[idx]
                        ? "bg-amber-200 text-amber-800"
                        : selectedAnswers[idx] !== undefined
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-violet-600 rounded-md"></div>
                <span>Current Question</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-md"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-amber-400 rounded-md"></div>
                <span>Flagged</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-4 h-4 bg-gray-300 rounded-md"></div>
                <span>Unanswered</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Submit Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Submission</h3>
            <p className="mb-6">
              You have answered {progress.answered} out of {progress.total} questions. Are you sure you want to submit
              this exam?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default McqPage
