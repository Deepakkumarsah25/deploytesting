import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.join(__filename)
// Set View Engine (EJS Example)
app.set("view engine", "ejs");

// Set Views Folder Path
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(__dirname,"public")))
// Middleware (optional)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/testdb").then(()=>{
    console.log("connected sessfull databased")
})
.catch(()=>{
    console.log("not connected mongoose")
})
// Route Example
app.get("/", (req, res) => {
  res.render("index"); // index.ejs
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
