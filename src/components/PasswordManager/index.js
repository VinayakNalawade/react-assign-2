import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    search: '',
    list: [],
    website: '',
    password: '',
    username: '',
    show: false,
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {website, password, username} = this.state

    const newDetails = {
      id: uuidv4(),
      username,
      password,
      website,
      color: Math.floor(Math.random() * 7),
    }

    if (website !== '' && password !== '' && username !== '') {
      this.setState(prevState => ({
        list: [...prevState.list, newDetails],
        username: '',
        password: '',
        website: '',
      }))
    }
  }

  onDelete = id => {
    const {list} = this.state

    const index = list.findIndex(each => each.id === id)

    list.splice(index, 1)

    this.setState({list})
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  changeShowPasswords = event => {
    this.setState({show: event.target.checked})
  }

  render() {
    const {search, show, website, password, list, username} = this.state

    const displaylist = list.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <img
          className="mainimg"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="inputSection">
          <form onSubmit={this.onSubmit} className="inputform">
            <h1 className="formheading">Add New Password</h1>
            <div className="inputContainer">
              <img
                className="inputimg"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Website"
                onChange={this.changeWebsite}
                value={website}
              />
            </div>
            <div className="inputContainer">
              <img
                className="inputimg"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.changeUsername}
              />
            </div>
            <div className="inputContainer">
              <img
                className="inputimg"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.changePassword}
              />
            </div>
            <button className="submitbutton" type="submit">
              Add
            </button>
          </form>
          <div className="formimgContainer">
            <img
              className="formimgsm"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <img
              className="formimglg"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
        </div>
        <div className="displaySection">
          <div className="searchSection">
            <div className="headingSection">
              <h1 className="searchHeading">Your Passwords</h1>
              <p className="listCount">{list.length}</p>
            </div>
            <div className="displayinputSection">
              <img
                className="searchimg"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                type="search"
                className="searchinput"
                placeholder="Search"
                value={this.search}
                onChange={this.changeSearch}
              />
            </div>
          </div>
          <div className="showPasswordsContainer">
            <input
              type="checkbox"
              id="showPasswords"
              className="checkbox"
              onChange={this.changeShowPasswords}
              value={show}
            />
            <label className="showPasswordsLabel" htmlFor="showPasswords">
              Show Passwords
            </label>
          </div>
          <ul className="listContainer">
            {displaylist.length === 0 ? (
              <div className="noPasswordsimgContainer">
                <img
                  className="noPasswordsimg"
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <p className="noPasswordsheading">No Passwords</p>
              </div>
            ) : (
              displaylist.map(each => (
                <PasswordItem
                  item={each}
                  show={show}
                  onDelete={this.onDelete}
                  key={each.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
