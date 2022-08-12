
import Express from "Express";
import {dirname} from "path"
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000

const app = new Express()



app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/src/${req.originalUrl}`)

})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})