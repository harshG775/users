const express = require('express');
const apiRouter = require("./routes/routes");
const app = express();


app.use(express.json())

app.use("/api",apiRouter)



app.listen(3000, () => {
    console.log('server started at port 3000');
});