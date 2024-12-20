import express from "express";
import { express_config } from "./config.js";

import costosRoutes from "./routes/costo.js";
import categoriasRoutes from "./routes/categoria.js";
import usuarioRoutes from "./routes/usuario.js";
import itemsRoutes from "./routes/items.js";
import presupuestoRoutes from "./routes/presupuesto.js";

const app = express();

app.set("port", express_config.port);
app.set("host", express_config.host);

app.use(express.json());
app.use(costosRoutes);
app.use(categoriasRoutes);
app.use(usuarioRoutes);
app.use(itemsRoutes);
app.use(presupuestoRoutes);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `Servidor corriendo en 'http://${app.get("host")}:${app.get("port")}`
  );
});
