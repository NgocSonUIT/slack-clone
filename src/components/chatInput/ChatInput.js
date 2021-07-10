import React, { useState } from 'react'
import './ChatInput.css'
import { Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from '../../store/StateProvider'
import db from '../../firebase'
import firebase from 'firebase'
import Picker from 'emoji-picker-react'

const ChatInput = ({ channelName, channelId }) => {

  const [input, setInput] = useState('')
  const [openEmoji, setOpenEmoji] = useState(false)
  const [{ user }] = useStateValue()

  const onEmojiClick = (e, emojiObject) => {
    if (emojiObject.emoji) {
      setInput(input + emojiObject.emoji)
    }
  }

  const onOpenEmoji = () => {
    setOpenEmoji(!openEmoji)
  }

  const sendMessage = (e) => {
    e.preventDefault()

    if (!input) {
      return
    }

    if (channelId) {
      db.collection('rooms').doc(channelId)
      .collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      })
      setInput('')
    }
  }
  return (
    <div className="chatInput">
      <div className="chatInput__container">
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Message #${channelName?.toLowerCase()}`}
          />
          {openEmoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
          <div className="chatInput__emoji"><EmojiEmotionsIcon onClick={onOpenEmoji}/></div>
          <Button type="submit" onClick={sendMessage}><SendIcon /></Button>
        </form>
      </div>
    </div>
  )
}

export default ChatInput
