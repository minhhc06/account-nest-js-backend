// import { IsNotEmpty } from "class-validator";

export class JobsDto{
    id: string;
    // @IsNotEmpty()
    title: string;
    
    // @IsNotEmpty()
    description: string;

    // @IsNotEmpty()
    content: string;
    
}