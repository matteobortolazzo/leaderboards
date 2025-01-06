import { useState } from 'react';
import './App.css'
import HomePage from './pages/home'
import { QuizPage } from './pages/quiz'

interface AppState {
  room?: string;
  running: boolean;
  answerIndex: number;
}

function App() {
  const [state, setState] = useState<AppState>({ running: true, answerIndex: -1 });

  const handleRoomJoin = (room: string) => {
    setState({ ...state, room, running: true });
  }

  const handleAnswer = (answerIndex: number) => {
    setState({ ...state, running: false, answerIndex });
  }

  const answerBlock = state.answerIndex < 0
    ? <div className="text-2xl font-bold">You didn't answer in time!</div>
    : <div className="text-2xl font-bold">You answered #{state.answerIndex}.</div>

  const mainPage = state.running
    ? <QuizPage onAnswer={handleAnswer} />
    : answerBlock;

  return (
    <>
      <div>
        <header className="fixed top-0 left-0 right-0 py-4 border-b border-gray-200 text-center">
          <h1 className="text-3xl font-bold">Leaderboards</h1>
        </header>

        {!state.room && <HomePage onRoomJoin={handleRoomJoin} />}
        {state.room && mainPage}
      </div>
    </>
  )
}

export default App
