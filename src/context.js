import React, { useState, useContext } from "react"
import sublinks from "./data"

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, showSideBar] = useState(false)
  const [isSubmenuOpen, showSubmenu] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: "", links: [] })

  const openSidebar = () => {
    showSideBar(true)
  }

  const closeSidebar = () => {
    showSideBar(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase())
    setPage(page)
    setLocation(coordinates)
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
        location,
        page,
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
