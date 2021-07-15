import { NonEmptyArray } from "type-graphql";

import {
  CreateOwnershipResolver,
  FindUniqueOwnershipResolver,
  OwnershipRelationsResolver,
} from "@generated/type-graphql";

export const ownershipResolvers: NonEmptyArray<Function> = [
  CreateOwnershipResolver,
  FindUniqueOwnershipResolver,
  OwnershipRelationsResolver,
];
