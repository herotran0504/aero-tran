const express = require("express");
const cors = require("cors");

const verifyToken = require("./controller/jwtMiddleware");

const usersRouter = require("./router/usersRouter");
const userRouter = require("./router/userRouter");
const loginRouter = require("./router/loginRouter");
const registerRouter = require("./router/registerRouter");

const flightRouter = require("./router/flightRouter");
const bookingRouter = require("./router/bookingRouter");

const app = express();
const port = process.env.PORT || 5001;
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());

// guest access
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/bookings', bookingRouter);
app.use('/flights', flightRouter);

// user access
app.use('/', verifyToken);
app.use('/users', usersRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
    res.status(500).json({message: "Something went wrong: " + err.message});
})

app.listen(port, () => console.log('Server is started on ' + port))