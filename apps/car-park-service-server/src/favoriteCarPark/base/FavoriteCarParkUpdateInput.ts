/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarParkWhereUniqueInput } from "../../carPark/base/CarParkWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FavoriteCarParkUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CarParkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarParkWhereUniqueInput)
  @IsOptional()
  @Field(() => CarParkWhereUniqueInput, {
    nullable: true,
  })
  carPark?: CarParkWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { FavoriteCarParkUpdateInput as FavoriteCarParkUpdateInput };
