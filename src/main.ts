import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {

    /*
    Crea la aplicacion a partir del modulo principal AppModule
    que es el que importa todos los demas modulos
    */
    const app = await NestFactory.create(AppModule);

    /*
    Configuración de Swagger para documentar los endpoints de la API.
    - DocumentBuilder permite personalizar el título, descripción y 
    versión de la documentación.
    */
    const config = new DocumentBuilder()
        .setTitle('API Marca')
        .setDescription('Documentación de la API Marca')
        .setVersion('1.0')
        .build();
    /*
    - SwaggerModule.createDocument genera el documento Swagger a partir 
    de la configuración y los metadatos de la app.
    - SwaggerModule.setup expone la interfaz interactiva de Swagger en 
    la ruta /api, donde se puede probar y visualizar la API.
    */
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    /* 
    Habilitar Cross-Origin Resource Sharing 
    Sirve para permitir peticiones desde otros origenes, 
    si no tiene especificacion permite cualquiera al especificar
    se puede permitir solo de origenes en especifico
     */
    app.enableCors(
        {
            origin: 'http://127.0.0.1:5173',
        }
    );

    /*
    Toma la configuracion de puerto desde el env
    y si no esta definido setea por defecto el 3000
    */
    await app.listen(process.env.PORT ?? 3000);


}
bootstrap();

