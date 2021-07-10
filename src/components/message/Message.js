import React, { useEffect } from 'react'
import './Message.css'

const Message = ({ message, timestamp, user, userImage }) => {
  const messagesEndRef = React.createRef()

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messagesEndRef])

  return (
    <>
      <div className="message">
        <img src={userImage} alt={user.displayName}/>
        <div className="message__info">
          <h4>
            {user}{" "}
            <span className="message__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
      <div ref={messagesEndRef} />
    </>

  )
}

export default Message