
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './route/AppRoutes'


export default function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}
