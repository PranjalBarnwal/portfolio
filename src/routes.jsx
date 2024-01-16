import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About"
import App from "./App"

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/> ,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/projects",
          element: <Projects/> ,
        },
        {
          path: "/skills",
          element: <Skills/> ,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ]);




export default routes;