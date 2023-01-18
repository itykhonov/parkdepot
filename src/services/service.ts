import { DocumentNode } from 'graphql';
import { apolloClient } from '../graphql/apollo';

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export const query: any = ({
  query,
  input
}: {
  query: DocumentNode;
  input: Record<string, unknown>;
}) => {
  return apolloClient.query({
    query,
    variables: {
      ...input
    }
  });
};
