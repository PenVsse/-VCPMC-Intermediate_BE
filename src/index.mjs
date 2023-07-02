import config from "./config/config";
import express from "express";
import connection from "./config/database";

import roleRoter from "./router/role";
import userRouter from "./router/user";
import banGhiRouter from "./router/banGhi";
import playlistRouter from "./router/playlist";
import scheduleRouter from "./router/schedule";
import deviceRouter from "./router/device";
import hdUyQuyenRouter from "./router/HDUyQuyen";

const app = express();

config(app);

app.use('/role', roleRoter);
app.use('/user', userRouter);
app.use('/video', banGhiRouter);
app.use('/playlist', playlistRouter);
app.use('/schedule', scheduleRouter);
app.use('/device', deviceRouter);
app.use('/hopdong', hdUyQuyenRouter);

const PORT = process.env.PORT;

connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});