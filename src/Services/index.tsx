import {graphql} from "@octokit/graphql";

const getCache = (key: string) => JSON.parse(localStorage.getItem(key) as string);

export const Service = async (params: any, query: string, type: string) => {
    const graphqlWithAuth = graphql.defaults({
        headers: {
            authorization: `token ${process.env.REACT_APP_GIT_HUB_TOKEN}`,
        },
    });

    if (!('after' in params)) {
        const cache = getCache('persist:root');
        if (cache) {
            const cacheObject = JSON.parse(cache[type]);
            if (cacheObject?.searchTerm === params.searchString) {
                return {search: cacheObject}
            }
        }
    }

    return await graphqlWithAuth(
        query, {
            ...params
        }
    );
}