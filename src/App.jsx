
import { useState } from "react"
import notificationsData from "./notifications"
import NotificationList from "./components/NotificationList"

function App() {

  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <div className="container mt-5">

      <h1 className="mb-3">
        Notifications ({notifications.length})
      </h1>

      <button 
        className="btn btn-danger mb-3"
        onClick={clearAll}
      >
        Clear All
      </button>

      <NotificationList>
        {notifications.map((notification) => (
          <div key={notification.id} className="card mb-3">
            <div className="card-body">

              <h5>{notification.name}</h5>
              <p>{notification.message}</p>

              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => clearNotification(notification.id)}
              >
                Clear
              </button>

            </div>
          </div>
        ))}
      </NotificationList>

    </div>
  )
}

export default App