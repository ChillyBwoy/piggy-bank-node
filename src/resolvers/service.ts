import { NonEmptyArray } from "type-graphql";

import {
  CreateServiceResolver,
  FindManyServiceResolver,
  FindUniqueServiceResolver,
  ServiceRelationsResolver,
} from "@generated/type-graphql";

export const serviceResolvers: NonEmptyArray<Function> = [
  CreateServiceResolver,
  FindManyServiceResolver,
  FindUniqueServiceResolver,
  ServiceRelationsResolver,
];
