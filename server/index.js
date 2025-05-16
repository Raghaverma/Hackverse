const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');
const hackathonsRouter = require('./routes/hackathons');
const submissionsRouter = require('./routes/submissions');
const resourcesRouter = require('./routes/resources');
const adminRouter = require('./routes/admin');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/hackathons', hackathonsRouter);
app.use('/api/submissions', submissionsRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hackverse API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
