import { gameModule } from './game/game.module';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), gameModule],
  providers: [PrismaService],
})
export class AppModule {}
