import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcaModule } from './modules/marca/marca.module';
import { PostgresModule } from './database/postgres/postgres.module';

@Module({
  imports: [MarcaModule, PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
