import { NonEmptyArray } from "type-graphql";

import { ownershipResolvers } from "./ownership";
import { proposalResolvers } from "./proposal";
import { serviceResolvers } from "./service";
import { userResolvers } from "./user";
import { voteResolvers } from "./vote";

export const resolvers: NonEmptyArray<Function> = [
  ...ownershipResolvers,
  ...userResolvers,
  ...serviceResolvers,
  ...proposalResolvers,
  ...voteResolvers,
];
