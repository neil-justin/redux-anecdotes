import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (notification.message.length > 0) {
    return (
      <div className="notification-container">
        {notification.message}
      </div>
    )
  }

  return null
}

export default Notification