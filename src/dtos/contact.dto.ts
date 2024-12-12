import { IsString, IsNotEmpty, IsDecimal, IsOptional, IsNumber } from 'class-validator';

export class ContactDto{
    @IsNotEmpty()
    @IsString()
    fname: string;
    @IsNotEmpty()
    @IsString()
    lname: string;
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 0})
    phoneNo: number;
}
export class UpdateContactDto{
    @IsOptional()
    @IsString()
    fname: string;
    @IsOptional()
    @IsString()
    lname: string;
    @IsOptional()
    @IsNumber( {maxDecimalPlaces: 0})
    phoneNo: number;
}