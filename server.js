import users from './routes/users.js';
import apiDocs from './routes/api-docs.js'
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// Initialize middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Home page placeholder
app.get('/', (req, res) => res.send("users-api"));

// Initialize 'Swagger UI' for API documentation
app.use('/api-docs', (apiDocs));

// Initialize 'users' API routes
app.use('/api/users', (users));

// Start express server
app.listen(PORT, () => {
    console.log(`==> [INFO] Server is listening to requests on http://localhost:${PORT}`);
});

process.once('SIGTERM', function () {
    process.kill(process.pid, 'SIGTERM');
});

process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});
