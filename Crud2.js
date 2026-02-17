var express=require("express");
var app=express();
app.use(express.json());
let students=[
    {id: 1,name: "Anbu",mobileno :123456789,address : "ABC",age:20}, 
    {id: 2,name: "Subu",mobileno :223456789,address : "DEF",age:21},
    {id: 3,name: "Suba",mobileno :323456789,address : "GHI",age:22},
{id: 4,name: "Ram",mobileno :423456789,address : "JKL",age:23},];
app.post("/students",(req,res)=>{
    const newStudents={
        id:students.length + 1,
    name: req.body.name,
    mobileno: req.body.mobileno,
    address: req.body.address,
    age: req.body.age
  
    };
    students.push(newStudents);
    res.send(newStudents);

});
//READ
app.get("/students",(req,res)=>{
    res.send(students);
});
app.get("/students/:id", (req, res) => {
  const student = students.find(u => u.id == req.params.id);

  if (!student) return res.status(404).send("Student not found");

  res.send(student);
});
app.put("/students/:id", (req, res) => {
  const student = students.find(u =>u.id === Number(req.params.id));//Params alaways having a parameters like id, name from the user send  

  if (!student) return res.status(404).send("User not found");

  student.name = req.body.name;
student.mobileno = req.body.mobileno;
student.address = req.body.address;
student.age = req.body.age;
 res.send(student);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter(u => u.id != req.params.id);
  res.send("Student deleted");
});
//filter function will create a new array and store only the mathcing element.
app.listen(9000, () => {
  console.log("Server running on port 9000");
});
