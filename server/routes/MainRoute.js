
const express = require('express')

const MainRoute = express.Router();


MainRoute.get('/getFriends',(req: Request, res: Response) => {
    res.json({ ok: "ok" })
});

export { MainRoute }

