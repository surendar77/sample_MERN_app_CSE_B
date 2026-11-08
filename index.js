let express=require("express");
let cors=require('cors');
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(cors())

process.env.MONGO_URI
//"mongodb+srv://xyz1597901_db_user:YDvL0FO840xKjAcq@cluster0.otukjyc.mongodb.net/hrmanagement"
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("connected with mongodb database")
  }).catch((err)=>{
    console.log(err);
  })

app.use(express.json());
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});