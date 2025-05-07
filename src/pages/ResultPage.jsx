import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Check, X, ArrowLeft, Home, RefreshCw, Award, BookOpen } from 'lucide-react'

const ResultPage = () => {
  const location = useLocation()
  
  // Get the selected answers from location state
  // If no state is passed, use an empty object as fallback
  const selectedAnswers = location.state?.selectedAnswers || {}
  
  // Use the same exam data as in the MCQ page
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

  // Calculate the score
  const calculateScore = () => {
    let correctCount = 0

    Object.entries(selectedAnswers).forEach(([questionIndex, answerIndex]) => {
      const qIndex = Number.parseInt(questionIndex)
      const question = examData.questions[qIndex]

      if (question.options[answerIndex] === question.answer) {
        correctCount++
      }
    })

    return {
      correct: correctCount,
      total: examData.questions.length,
      percentage: Math.round((correctCount / examData.questions.length) * 100),
    }
  }

  const score = calculateScore()

  // Determine if the user passed (assuming 60% is passing)
  const isPassed = score.percentage >= 60

  // Get feedback based on score
  const getFeedback = () => {
    if (score.percentage >= 90) return "Excellent! You have a strong understanding of software engineering concepts."
    if (score.percentage >= 75) return "Great job! You have a good grasp of most software engineering principles."
    if (score.percentage >= 60) return "Good work! You've passed, but there's room for improvement."
    return "You didn't pass this time. Review the material and try again."
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white p-4 border-b border-gray-200">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-gray-800">Software Engineering Exam Results</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* Score Summary Card */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Your Result</h2>
              <p className="text-gray-600">{getFeedback()}</p>
            </div>

            <div className="flex items-center">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${
                  isPassed ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <div
                  className={`w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 ${
                    isPassed ? "border-green-500" : "border-red-500"
                  }`}
                >
                  <span className="text-3xl font-bold">{score.percentage}%</span>
                  <span className="text-sm">
                    {score.correct}/{score.total}
                  </span>
                </div>
              </div>

              <div className="ml-4">
                <div className="flex items-center mb-2">
                  <Award className={`w-5 h-5 mr-2 ${isPassed ? "text-green-500" : "text-gray-400"}`} />
                  <span className={`font-medium ${isPassed ? "text-green-600" : "text-gray-500"}`}>
                    {isPassed ? "Passed" : "Not Passed"}
                  </span>
                </div>
                <div className="text-sm text-gray-500">Passing score: 60%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Question Analysis</h3>

          <div className="space-y-4">
            {examData.questions.map((question, index) => {
              const userAnswerIndex = selectedAnswers[index]
              const userAnswer = userAnswerIndex !== undefined ? question.options[userAnswerIndex] : "Not answered"
              const isCorrect = userAnswer === question.answer

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    userAnswerIndex === undefined
                      ? "border-gray-300 bg-gray-50"
                      : isCorrect
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        userAnswerIndex === undefined ? "bg-gray-300" : isCorrect ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {userAnswerIndex !== undefined &&
                        (isCorrect ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />)}
                    </div>

                    <div className="ml-3 flex-grow">
                      <p className="font-medium">
                        Question {index + 1}: {question.question}
                      </p>

                      <div className="mt-2 text-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-medium mr-2">Your answer:</span>
                          <span
                            className={
                              userAnswerIndex === undefined
                                ? "text-gray-500 italic"
                                : isCorrect
                                  ? "text-green-600"
                                  : "text-red-600"
                            }
                          >
                            {userAnswer}
                          </span>
                        </div>

                        {!isCorrect && (
                          <div className="flex flex-col sm:flex-row sm:items-center mt-1">
                            <span className="font-medium mr-2">Correct answer:</span>
                            <span className="text-green-600">{question.answer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link to="/mcq" className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Exam</span>
          </Link>

          <Link
            to="/mcq"
            className="flex items-center space-x-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retake Exam</span>
          </Link>

          <Link
            to="/study"
            className="flex items-center space-x-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Materials</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default ResultPage
