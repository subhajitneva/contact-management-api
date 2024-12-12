
import { validate } from 'class-validator';
export class DtoValidatorMiddlehare{
    static dtoValidate(input: any){
        return validate(input)
    }
}