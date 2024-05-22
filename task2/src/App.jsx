import { BrowserRouter, RouterProvider } from "react-router-dom"
import { router } from "./router/router"

function App() {

  return (
    <>
      {/* <Output/> */}
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
