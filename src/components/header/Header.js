import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from '../../store/StateProvider'

const Header = ({ signOut }) => {
  const [{user}] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__avatar">
          <Avatar
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <div className="header__signOut" onClick={signOut}>Sign out</div>
        </div>
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Slack" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header