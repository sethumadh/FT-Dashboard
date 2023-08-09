import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import LoadingSpinner from "./components/LoadingSpinner"
import AuthRequired from "./components/layouts/AuthRequiredLayout"
import DashboardLayout from "./components/layouts/DashboardLayout"
import SigninLayout from "./components/layouts/SigninLayout"
import ChangePassword from "./pages/ChangePassword"
import Dashboard from "./pages/Dashboard"
import PageNotFound from "./pages/PageNotFound"
import Signin from "./pages/Signin"
import StudentDetail from "./pages/StudentDetail"
import { store } from "./redux/store"
import Analytics from "./pages/Analytics"
import Predictions from "./pages/Predictions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthRequired />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/student_detail/:id" element={<StudentDetail />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/predictions" element={<Predictions />} />
        </Route>
      </Route>
      <Route element={<SigninLayout />}>
        <Route path="/login" element={<Signin />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </>
  )
)
function App() {
  const persistor = persistStore(store)
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="flex items-center justify-center h-screen">
              <LoadingSpinner className="w-20 h-20" />
            </div>
          }
          persistor={persistor}
        >
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
