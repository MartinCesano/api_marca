import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    
    /*
    Crea la aplicacion a partir del modulo principal AppModule
    que es el que importa todos los demas modulos
    */
    const app = await NestFactory.create(AppModule);
    
    /* 
    Habilitar Cross-Origin Resource Sharing 
    Sirve para permitir peticiones desde otros origenes, 
    si no tiene especificacion permite cualquiera al especificar
    se puede permitir solo de origenes en especifico
     */
    app.enableCors();

    /*
    Toma la configuracion de puerto desde el env
    y si no esta definido setea por defecto el 3000
    */
    await app.listen(process.env.PORT ?? 3000);
    
}
bootstrap();

