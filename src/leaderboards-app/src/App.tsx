import './App.css'
import HomePage from './pages/home'
import { QuizPage } from './pages/quiz'
function App() {

  return (
    <>
      <div>
        <header className="fixed top-0 left-0 right-0 py-4 border-b border-gray-200 text-center">
          <h1 className="text-3xl font-bold">Leaderboards</h1>
        </header>

        <HomePage />
        <QuizPage />
      </div>
    </>
  )
}

export default App
