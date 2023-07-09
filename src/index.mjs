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
import BanGhiUyQuyenRouter from "./router/banGhiUyQuyen";
import hdKhaiThacRouter from "./router/HDKhaiThac";
import UnitsUsedRouter from "./router/unitUsed";
import UnitsUsedDetailRouter from "./router/unitUsedDetail";
import partnerRouter from "./router/partner";
import ppdtRouter from "./router/phanPhoiDoanhThu";
import lsdsRouter from "./router/lichSuDoiSoat";

const app = express();

config(app);

app.use('/role', roleRoter);
app.use('/user', userRouter);
app.use('/video', banGhiRouter);
app.use('/playlist', playlistRouter);
app.use('/schedule', scheduleRouter);
app.use('/device', deviceRouter);
app.use('/hopdong', hdUyQuyenRouter);
app.use('/video-uq', BanGhiUyQuyenRouter);
app.use('/hdkt', hdKhaiThacRouter);
app.use('/unit-used', UnitsUsedRouter);
app.use('/unit-used-detail', UnitsUsedDetailRouter);
app.use('/partner', partnerRouter);
app.use('/ppdt', ppdtRouter);
app.use('/lsds', lsdsRouter);

const PORT = process.env.PORT;

connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});