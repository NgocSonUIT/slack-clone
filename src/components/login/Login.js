import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../store/StateProvider'
import { actionTypes } from '../../store/reducer'

const Login = () => {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      localStorage.setItem('user', JSON.stringify(result.user))
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://3.bp.blogspot.com/-Jse-dFpoM5w/XILR7dDlcbI/AAAAAAAAIgA/bnyYvKro0Ak18SqrebMmWRk9gKKof8G6ACK4BGAYYCw/s1600/logo%2Bslack.png" alt=""/>
        <h1>Sign in to Slack</h1>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login