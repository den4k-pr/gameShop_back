import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { GameDto } from './dto/game.dto'

@Injectable()
export class GameService {
	constructor(
		private prisma: PrismaService,
	) {}

	async getAll(){
		const games = await this.prisma.game.findMany()

		return games
	}

	async byId(id: number) {
		const game = await this.prisma.game.findUnique({
			where: {
				id
			}
		})

		if (!game) throw new NotFoundException('game not found!')
		return game
	}


	async create(dto: GameDto) {
		const game = await this.prisma.game.create({
			data: {
				mainImg: dto.mainImg,
				name: dto.name,
				price: dto.price,
				text: dto.text,
				video: dto.video,
				logo: dto.logo,
				genres: dto.genres.join(', '),
				features: dto.features.join(', '),
				description: dto.description,
				images: dto.images,
				platforms: dto.platforms.join(', '),
				developer: dto.developer,
				publisher: dto.publisher,
				releaseDate: dto.releaseDate,
				initialRelease: dto.initialRelease,

				Min_OSversion: dto.Min_OSversion,      
				Min_CPU: dto.Min_CPU,            
				Min_memory: dto.Min_memory,         
				Min_GPU: dto.Min_GPU,            
				Min_directX: dto.Min_directX,        
				Min_storage: dto.Min_storage,        
				Min_soundCard: dto.Min_soundCard,      

				Rec_OSversion: dto.Rec_OSversion,      
				Rec_CPU: dto.Rec_CPU,            
				Rec_memory: dto.Rec_memory,         
				Rec_GPU: dto.Rec_GPU,            
				Rec_directX: dto.Rec_directX,        
				Rec_storage: dto.Rec_storage,        
				Rec_soundCard: dto.Rec_soundCard,      
				
				languagesAudio: dto.languagesAudio, 
				languagesText: dto.languagesText,  
			  },
		});
		return game.id;
		}
	

	async update(id: number, dto: GameDto) {
		const {
				mainImg,
				name,
				price,
				text,
				video,
				logo,
				genres,
				features,
				description,
				images,
				platforms,
				developer,
				publisher,
				releaseDate,
				initialRelease,

				Min_OSversion,      
				Min_CPU,            
				Min_memory,         
				Min_GPU,            
				Min_directX,        
				Min_storage,        
				Min_soundCard,      

				Rec_OSversion,      
				Rec_CPU,            
				Rec_memory,         
				Rec_GPU,            
				Rec_directX,        
				Rec_storage,        
				Rec_soundCard,      

				languagesAudio, 
				languagesText,  

			
		} = dto

		return this.prisma.game.update({
			where: {
				id
			},
			data: {
				mainImg,
				name,
				price,
				text,
				video,
				logo,
				//genres,
				//features,
				description,
				images,
				//platforms,
				developer,
				publisher,
				releaseDate,
				initialRelease,

				//Min_OSversion,      
				//Min_CPU,            
				// Min_memory,         
				// Min_GPU,            
				// Min_directX,        
				// Min_storage,        
				// Min_soundCard,      
				// Min_languagesAudio, 
				// Min_languagesText,  

				// Rec_OSversion,      
				// Rec_CPU,            
				// Rec_memory,         
				// Rec_GPU,            
				// Rec_directX,        
				// Rec_storage,        
				// Rec_soundCard,      
				// Rec_languagesAudio, 
				// Rec_languagesText
			}
		})
	}

	async delete(id: number) {
		return this.prisma.game.delete({ where: { id } })
	}
}
