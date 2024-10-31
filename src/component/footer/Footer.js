import React from 'react'
import './footer.css'
const Footer=()=> {
  return (
    <div>
     <footer className="layout_footer">
        &copy; React Bootkamp {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Footer