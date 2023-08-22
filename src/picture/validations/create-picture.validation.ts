import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePictureValidation {
  @IsString()
  @IsNotEmpty()
  readonly url: string;

  @IsString()
  @IsNotEmpty()
  readonly mapId: string;

  @IsArray()
  @IsNotEmpty()
  readonly coordinates: number[];
}
