import Navbar from "../../components/navbar/views/Navbar"


const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout