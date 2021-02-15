import {graphql} from "@octokit/graphql";

const getCache = (key: string) => JSON.parse(localStorage.getItem(key) as string);

export const Service = async (searchString: any, query: string, type: string) => {
    const graphqlWithAuth = graphql.defaults({
        headers: {
            authorization: `token ${process.env.REACT_APP_GIT_HUB_TOKEN}`,
        },
    });

    const cache = getCache('persist:root');
    if (cache) {
        const cacheObject = JSON.parse(cache[type]);
        if (cacheObject?.searchText === searchString) {
            return {search: cacheObject}
        }
    }

    return await graphqlWithAuth(
        query, {
            searchString
        }
    );
}