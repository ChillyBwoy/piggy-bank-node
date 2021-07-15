import { NonEmptyArray } from "type-graphql";

import {
  CreateVoteResolver,
  FindManyVoteResolver,
  FindUniqueVoteResolver,
  VoteRelationsResolver,
} from "@generated/type-graphql";

export const voteResolvers: NonEmptyArray<Function> = [
  CreateVoteResolver,
  FindManyVoteResolver,
  FindUniqueVoteResolver,
  VoteRelationsResolver,
];
