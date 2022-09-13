import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-info text-white display-4 heading">TODO管理</h1>
      <div className="container">
        <MemoPage />
      </div>
    </div>
  )
}

export default App
