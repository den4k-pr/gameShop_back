import { GameService } from './game.service';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { GameDto } from './dto/game.dto'

@Controller('games')
export class GameController {
	constructor(private readonly gameService: GameService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get()
	async getAll() {
		return this.gameService.getAll()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async createProduct(@Body() dto: GameDto) {
		return this.gameService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	async updateProduct(@Param('id') id: string, @Body() dto: GameDto) {
		return this.gameService.update(+id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	async deleteProduct(@Param('id') id: string) {
		return this.gameService.delete(+id)
	}

	@Get(':id')
	async getProduct(@Param('id') id: string) {
		return this.gameService.byId(+id)
	}
}
