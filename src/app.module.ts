import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcaModule } from './modules/marca/marca.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [MarcaModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'programacion_avanzada',
    entities: [__dirname + '/modules/**/entities/*.entity{.ts,.js}'],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
