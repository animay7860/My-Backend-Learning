import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    const date = new Date;
    const day = date.getDay();
    let daytp = "It's a week Day";
    let adv = "Work Hard";
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
    }
    res.render("index.ejs", {
        Daytype: daytp,
        typeofwork: adv
    });
})
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});