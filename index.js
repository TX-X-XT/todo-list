import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const tasks =[];
const tasks2 = [];

const date = new Date();
let currentDate = date.getDate();
let month;
let day;
let hour = date.getHours();
let dayTime;
if (hour >= 19 || hour < 6) {
    dayTime = "Good Evening";
} else if (hour >= 6 && hour < 12) {
    dayTime = "Good Morning";
} else if (hour >= 12 && hour < 19) {
    dayTime = "Good Afternoon";
}
switch(new Date().getMonth()) {
    case 0 :
        month = "January";
        break;
    case 1 :
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6 :
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";

}

switch(new Date().getDay()){
    case 1:
        day="Monday";
        break;
    case 2 : day= "Tuesday";
    break;
    case 3 : day = "Wednesday";
    break;
    case 4 : day = "Thursday";
    break;
    case 5 : day = "Friday";
    break;
    case 6 : day = "Saturday";
    break;
    case 0 : day = "Sunday";
}







app.get("/", (req,res)=>{
    res.render("index.ejs", { tasks: tasks, day:day, dayTime:dayTime, month:month, currentDate:currentDate });


} );
app.post("/addtask", (req,res)=>{
    const taskDescription = req.body.task;
    if (taskDescription.trim() !== '') {
        tasks.push(taskDescription);
    }

    res.redirect("/");


});

app.get("/work", (req,res)=>{
    res.render("work.ejs", { tasks2: tasks2, day:day, dayTime:dayTime, month:month, currentDate:currentDate});


} );

app.post("/addtask2", (req,res)=>{
    const taskDescription2 = req.body.task2;
    if (taskDescription2.trim() !== '') {
        tasks2.push(taskDescription2);
    }

    res.redirect("/work");


});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

