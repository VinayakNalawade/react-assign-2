import './index.css'

const colorslist = ['green', 'blue', 'yellow', 'red', 'sky', 'grey', 'orange']

const PasswordItem = props => {
  const {item, show, onDelete} = props

  const deleteItem = () => {
    onDelete(item.id)
  }
  return (
    <li className="passwordItem">
      <p className={`profileimg ${colorslist[item.color]}`}>
        {item.website[0]}
      </p>
      <div className="itemDetailsContainer">
        <p className="itemDetailstext">{item.website}</p>
        <p className="itemDetailstext">{item.username}</p>
        {show ? (
          <p className="itemDetailstext">{item.password}</p>
        ) : (
          <img
            className="starsimg"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button
        testid="delete"
        className="deleteButton"
        onClick={deleteItem}
        type="button"
      >
        <img
          className="deleteimg"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItem
