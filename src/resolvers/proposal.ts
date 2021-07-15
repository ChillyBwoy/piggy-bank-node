import { NonEmptyArray } from "type-graphql";

import {
  CreateProposalResolver,
  FindManyProposalResolver,
  FindUniqueProposalResolver,
  ProposalRelationFilter,
  ProposalRelationsResolver,
} from "@generated/type-graphql";

export const proposalResolvers: NonEmptyArray<Function> = [
  CreateProposalResolver,
  FindManyProposalResolver,
  FindUniqueProposalResolver,
  ProposalRelationsResolver,
  ProposalRelationFilter,
];
