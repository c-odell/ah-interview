import { Exercise1 } from './exercises/Exercise1'
import authorLogo from '/author.svg'

function App() {
  return (
    <>
      <header className="text-white bg-blue-950 px-6 flex min-h-14 content-start items-center justify-between">
        <img src={authorLogo} className="logo" alt="Vite logo" />
        <h1>Author Health Tech Exercise</h1>
      </header>
      <main className="p-6 max-w-3xl">
        <Exercise1 />
      </main>
    </>
  )
}

export default App
