const express = require("express");
const app = express();

const xlsx = require("xlsx");
//workbook =wb; readfile ya3ne 3am e2ra excel kello
const wb = xlsx.readFile("data.xlsx");

// //ws=worksheet ya3ne 3am e2ra war2a war2a wehde mn l excel bsamiha ana , msamehon
// //hon "Students"

let ws = wb.Sheets["Stud"];

// //3am y2elle eno bi 7awel data excel la json
let data = xlsx.utils.sheet_to_json(ws);

// //kl ma badde 3adel 3a excel lezem ektob hay l statement
console.log(data);

// //enable CORS on API level
var cors = require("cors");
app.use(cors());
// //routing
let datas = [{ id: 5, name: "elia" }];
app.get("/", (req, res) => {
  res.send(data);
});
// app.listen(500);
// //ctrl+z
// //nodemon fekra zakiye ta ma edtar dal wa2ef kl script bi scripto bl js ta erja3 2ale3o. so kermel deghre yemche
// //ya3mol auto reload

// //cross origin resource sharing
// //bas 3ayet la api localhost mn localhost tene
// //l 7al houwe eno nazel npm i cors w bi sir fiye 7aded aya api fi y3ayet la li ana talebo

// const express = require("express");
// const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
