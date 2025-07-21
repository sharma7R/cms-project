import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../service/userService';
import storageService from '../service/storageService';
import historyService from '../service/historyService';
import { useNavigate } from 'react-router';

const AuthContext = createContext();
function AuthProvider({ children }) {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	function login(email, password) {
		try {
			userService.authenticate(email, password);
			userService.setUser(email);
			storageService.setUser(email);
			historyService.setUser(email);
			setIsAuth(true);
			historyService.addHistory('login');
			navigate('/dashboard/intro');
			Swal.fire({
				title: "Success",
				text: "Login is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}
	function logout() {
		setIsAuth(false);
		Swal.fire({
			title: "Success",
			text: "Logout successful",
			icon: "success"
		});
		// Clear user from all services to ensure correct logout and data isolation
		userService.setUser(null);
		storageService.setUser(null);
		historyService.setUser(null);
		navigate('/home');
	}
	function register(email, password) {
		try {
			userService.addUser(email, password);
			userService.setUser(email);
			storageService.setUser(email);
			historyService.setUser(email);
			setIsAuth(true);
			historyService.addHistory('register');
			navigate('/dashboard/intro');
			Swal.fire({
				title: "Success",
				text: "Registration is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}
	return (
		<AuthContext.Provider value={{ login, logout, register, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider };
export default AuthContext;