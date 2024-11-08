const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "your_secret_key"; // Change to a strong secret in production

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Hardcoded "database" for demo purposes
const users = [{ username: "testuser", password: "testpass" }];

// Middleware to protect routes
function authenticateToken(req : any, res: any, next: any) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  // Verify token
  jwt.verify(token.split(" ")[1], SECRET_KEY, (err : any, user: any) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = user; // Add user data to the request
    next();
  });
}

// Login route to get JWT
app.post("/auth/login", (req: any, res: any) => {
  const { username, password } = req.body;
console.log("req.body:",req.body);

  // Verify username and password from hardcoded "users"
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  // Generate JWT
  const accessToken = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ accessToken });
});

// Protected route
app.get("/protected", authenticateToken, (req: any, res: any) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Test open route
app.get("/", (req: any, res: any) => {
  res.send("Welcome to the JWT Auth Demo");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
