import express from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res) => {

})

app.post("/signin", (req, res) => {

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {


    res.json({
        roomId: 123
    })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
});