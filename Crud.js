
var express=require("express");
var app=express();
/*

{
  "name": "Arun",
  "mobileno": 523456789,
  "address": "MNO",
  "age": 24
}*/

app.use(express.json()); // to read JSON body

// In-memory array (acts like DB)
let users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Sara", age: 22 },
  {id: 3,name: "Suba",age:21}
];


app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  users.push(newUser);
  res.send(newUser);
});


// ================= READ =================
// GET /users
app.get("/users", (req, res) => {
  res.send(users);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send("User not found");

  res.send(user);
});
// ================= UPDATE =================
// PUT /users/:id


app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);//Params alaways having a parameters like id, name from the user send  

  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  user.age = req.body.age;

  res.send(user);
});

//:id is a route parameter.
//u is each user in the array.
//req.params.id gets the id from the URL.
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send("User deleted");
});
//filter function will create a new array and store only the mathcing element.
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

