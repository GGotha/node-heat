import { serverHttp } from "./app";

serverHttp.listen(3333, () => {
  console.log("Servidor startado na porta 3333");
});
