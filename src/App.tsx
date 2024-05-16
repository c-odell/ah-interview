import { Link, Redirect, Route, Switch } from 'wouter'
import authorLogo from '/author.svg'
import { Exercise1 } from './exercises/Exercise1'
import { Exercise2 } from './exercises/Exercise2'

function App() {
  return (
    <>
      <header className="text-white bg-blue-950 px-6 flex min-h-14 content-start items-center gap-6">
        <img src={authorLogo} className="logo" alt="Vite logo" />
        <Link className={(active) => (active ? "underline" : "")} href="/exercise/1">Exercise 1</Link>
        <Link className={(active) => (active ? "underline" : "")} href="/exercise/2">Exercise 2</Link>
        <h1 className='flex-grow text-right'>Author Health Tech Exercise</h1>
      </header>
      <main className="p-6 max-w-3xl">
      <Switch>
        <Route path="/exercise/1" component={Exercise1} />
        <Route path="/exercise/2" component={Exercise2} />
        <Route>
          <Redirect to="/exercise/1" />
        </Route>
      </Switch>
      </main>
    </>
  )
}

export default App
