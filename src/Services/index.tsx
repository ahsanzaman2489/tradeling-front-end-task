import {graphql} from "@octokit/graphql";

export const Service = async (searchString: any, query: string) => {
    const graphqlWithAuth = graphql.defaults({
        headers: {
            authorization: `token cdf5321ad1ae4c84e1102b5c161824a242d25817`,
        },
    });
    return await graphqlWithAuth(
        query, {
            searchString
        }
    );
}