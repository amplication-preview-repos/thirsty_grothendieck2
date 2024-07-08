/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarParkWhereUniqueInput } from "./CarParkWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CarParkUpdateInput } from "./CarParkUpdateInput";

@ArgsType()
class UpdateCarParkArgs {
  @ApiProperty({
    required: true,
    type: () => CarParkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarParkWhereUniqueInput)
  @Field(() => CarParkWhereUniqueInput, { nullable: false })
  where!: CarParkWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CarParkUpdateInput,
  })
  @ValidateNested()
  @Type(() => CarParkUpdateInput)
  @Field(() => CarParkUpdateInput, { nullable: false })
  data!: CarParkUpdateInput;
}

export { UpdateCarParkArgs as UpdateCarParkArgs };