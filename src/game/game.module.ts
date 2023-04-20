import { GameController } from './game.controler';
import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { GameService } from './game.service';

@Module({
  controllers: [GameController],
	providers: [GameService, PrismaService]
})
export class gameModule {}
