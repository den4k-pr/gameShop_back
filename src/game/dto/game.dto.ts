import { ArrayMinSize, IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class GameDto {

	@IsString()
	mainImg: string

	@IsString()
	name: string

	@IsString()
	price: string

	@IsString()
	text: string

	@IsString()
	video: string

	@IsString()
	logo: string

	@IsArray()
	@IsString({ each: true })
	genres: string[]

	@IsArray()
	@IsString({ each: true })
	features: string[]

	@IsString()
	description: string

	@IsArray()
	@IsString({ each: true })
	images: string[]

	

	@IsArray()
	@IsString({ each: true })
	platforms: string[]

	@IsString()
	developer: string

	@IsString()
	publisher: string
	
	@IsString()
	releaseDate: string

	@IsString()
	initialRelease: string

	@IsString()
	Min_OSversion: string
	@IsString()
  	Min_CPU: string
	@IsString()
  	Min_memory: string
	@IsString()
  	Min_GPU: string
	@IsString()
  	Min_directX: string
	@IsString()
  	Min_storage: string
	@IsString()
  	Min_soundCard: string

	@IsString()
  	Rec_OSversion: string
	@IsString()
  	Rec_CPU: string
	@IsString()
  	Rec_memory: string
	@IsString()
  	Rec_GPU: string
	@IsString()
  	Rec_directX: string
	@IsString()
  	Rec_storage: string
	@IsString()
  	Rec_soundCard: string


	@IsString()
  	languagesAudio: string
	@IsString()
  	languagesText: string
}


