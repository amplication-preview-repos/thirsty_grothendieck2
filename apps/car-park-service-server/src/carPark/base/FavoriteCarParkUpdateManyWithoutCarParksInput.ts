/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FavoriteCarParkWhereUniqueInput } from "../../favoriteCarPark/base/FavoriteCarParkWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FavoriteCarParkUpdateManyWithoutCarParksInput {
  @Field(() => [FavoriteCarParkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCarParkWhereUniqueInput],
  })
  connect?: Array<FavoriteCarParkWhereUniqueInput>;

  @Field(() => [FavoriteCarParkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCarParkWhereUniqueInput],
  })
  disconnect?: Array<FavoriteCarParkWhereUniqueInput>;

  @Field(() => [FavoriteCarParkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCarParkWhereUniqueInput],
  })
  set?: Array<FavoriteCarParkWhereUniqueInput>;
}

export { FavoriteCarParkUpdateManyWithoutCarParksInput as FavoriteCarParkUpdateManyWithoutCarParksInput };