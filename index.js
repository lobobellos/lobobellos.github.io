
import Express from "Express";
import {dirname} from "path"
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000
const app = new Express()

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/src/main/index.html`)
})
app.get('/first',(req,res)=>{
    res.sendFile(`${__dirname}/src/first/index.html`)
})
app.get('/sponsor',(req,res)=>{
    res.sendFile(`${__dirname}/src/sponsor/index.html`)
})
app.get('/sponsors',(req,res)=>{
    res.sendFile(`${__dirname}/src/sponsors/index.html`)
})
app.get('/contact',(req,res)=>{
    res.sendFile(`${__dirname}/src/contact/index.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/src/${req.originalUrl}`)

})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})