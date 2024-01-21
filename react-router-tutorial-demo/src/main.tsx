import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error-page"
import Index from "./routes"
import { action as contactAction, loader as contactLoader } from "./routes/contact"
import Contact from "./routes/contact"
import { action as destroyAction } from "./routes/destroy"
import { action as editAction } from "./routes/edit"
import EditContact from "./routes/edit"
import Root, { action as rootAction, loader as rootLoader } from "./routes/root"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
