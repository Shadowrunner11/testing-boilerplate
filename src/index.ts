import server from "./server";
import { server as configServer } from "./config";

export = server

const { host, port } =  configServer


server
  .listen(port, host,()=>{
    console.log(`% listening on http://${host}:${port}%`)
  })
