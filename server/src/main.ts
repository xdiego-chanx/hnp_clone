import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create(AppModule);
    
    const host = process.env.HOST ?? "127.0.0.1";
    const port = process.env.PORT ?? 3000;
    
    await app.listen(port, () => console.log("Server is listening at http://%s:%d/", host, port));
})();