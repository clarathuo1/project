import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

// Define the schema for validation
const registerSchema = z.object({
	fullName: z.string().min(2, "Full name must be at least 2 characters long"),
	email: z.string().email("Invalid email address"),
	username: z.string().min(3, "Username must be at least 3 characters long"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Register = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();

		setError(null);
		setSuccessMessage(null);

		const validationResult = registerSchema.safeParse({
			fullName,
			email,
			username,
			password,
		});

		if (!validationResult.success) {
			const errorMessages = validationResult.error.issues.map(
				(issue) => issue.message
			);
			setError(errorMessages.join(", "));
			return;
		}

		try {
			const response = await fetch("http://127.0.0.1:5555/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					full_name: fullName,
					email,
					username,
					password,
				}),
			});

			if (!response.ok) {
				throw new Error("Registration failed");
			}

			setSuccessMessage("Registration successful! Redirecting to login...");
			setTimeout(() => navigate("/login"), 2000);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleRegister}>
			<h2>Register</h2>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
			<div>
				<label>Full Name:</label>
				<input
					type="text"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
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
			<button type="submit">Register</button>
		</form>
	);
};

export default Register;