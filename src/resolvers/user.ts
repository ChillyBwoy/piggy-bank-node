import { NonEmptyArray } from "type-graphql";

import {
  FindManyUserResolver,
  FindUniqueUserResolver,
  UserRelationsResolver,
} from "@generated/type-graphql";

export const userResolvers: NonEmptyArray<Function> = [
  FindManyUserResolver,
  FindUniqueUserResolver,
  UserRelationsResolver,
];
