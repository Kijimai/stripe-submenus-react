import React, { useState, useContext } from "react"
import sublinks from "./data"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, showSideBar] = useState(false)
  const [isSubmenuOpen, showSubmenu] = useState(true)

  const openSidebar = () => {
    showSideBar(true)
  }

  const closeSidebar = () => {
    showSideBar(false)
  }

  const openSubmenu = () => {
    showSubmenu(true)
  }

  const closeSubmenu = () => {
    showSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSubmenu,
        openSubmenu,
        closeSidebar,
        isSubmenuOpen,
        isSideBarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
