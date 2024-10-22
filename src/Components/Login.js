import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
	username: z.string().min(3, "Username must be at least 3 characters long"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		setError(null);

		const validationResult = loginSchema.safeParse({ username, password });

		if (!validationResult.success) {
			const errorMessages = validationResult.error.issues.map(
				(issue) => issue.message
			);
			setError(errorMessages.join(", "));
			return;
		}

		try {
			const response = await fetch("https://server-v95o.onrender.com/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			const data = await response.json();
			console.log("Logged in user:", data);
			navigate("/Dashboard");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<h2>Login</h2>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div>
				<label>Username:</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;