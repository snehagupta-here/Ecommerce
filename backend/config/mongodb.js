import mongoose from "mongoose";
const connectToDB =  () => {
  // mongoose.connection.on('connected',()=>{
  //   console.log("connected to DB");
  // })
   mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`).then(()=>{
    console.log("connected to DB");
  }).catch((e)=>{
    console.log("error while connecting to DB",e);
  })
}
export default connectToDB;