const express = require("express");
const cors = require("cors");

const userRouter = require("./router/userRouter");
const bookingRouter = require("./router/bookingRouter");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/login', userRouter);
app.use('/bookings', bookingRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(port, () => console.log('Server is started on ' + port))