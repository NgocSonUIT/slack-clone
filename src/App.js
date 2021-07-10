import './App.css'
import { useEffect } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import Login from './components/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { useStateValue } from './store/StateProvider'
import { actionTypes } from './store/reducer'
import { auth } from './firebase'

const App = () => {
  const [{ user }, dispatch] = useStateValue()
  const userStr = 'user'

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(userStr))
    if (user) {
      dispatch({
        type: actionTypes.SET_USER,
        user: JSON.parse(localStorage.getItem(userStr))
      })
    }
  }, [dispatch])

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem(userStr)
      dispatch({
        type: actionTypes.SET_USER,
        user: null
      })
    })
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <Header signOut={signOut} />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h2>Welcome</h2>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
