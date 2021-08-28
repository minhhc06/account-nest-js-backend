// import { IsNotEmpty } from "class-validator";

export class AccountDto{
    id: string;
    // @IsNotEmpty()
    title: string;
    
    // @IsNotEmpty()
    description: string;

    // @IsNotEmpty()
    content: string;
    
}