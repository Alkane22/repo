const Notification = ({ message, type }) => {
    if (message === null) {
      return null
    }
  
    if(type === 'error'){
        return (
            <div className={type}>
              {message}
            </div>
          )
    }
    
    if(type ==='message'){
        return (
            <div className={type}>
              {message}
            </div>
          )
    }
  }

export default Notification