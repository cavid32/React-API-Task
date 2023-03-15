import ExpensiveProducts from "./Pages/ExpensiveProducts";
import Index from "./Pages/Index";
import About from "./Pages/About";

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "expensive",
    element: <ExpensiveProducts />,
  },
];
export default routes;
