// Shared Queries
const pageInfo = `pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }`;

const users = ` ... on User {           
                      avatarUrl(size: 100)
                      login
                      name
                      url
                       repositories {
                        totalCount
                      }
                      followers {
                        totalCount
                      }
                      following {
                        totalCount
                      }
                    }
}`;

const repository = ` ... on Repository {
                        name
                        url
                        isPrivate
                        owner {
                          login
                        }
                        stargazerCount
                        forks {
                          totalCount
                        }
                        pullRequests {
                          totalCount
                        }
                        primaryLanguage {
                          color
                          name
                        }
                      }
}`;

export const searchUserQuery = `
     query search($searchString: String!,$first: Int = 50) {
            search(query: $searchString, type: USER,first:$first){
            userCount
            ${pageInfo}
                nodes{
                 ${users}
            }  
}`

export const searchRepoQuery = `
     query search($searchString: String!,$first: Int = 50) {
            search(query: $searchString, type: REPOSITORY,first:$first){
                repositoryCount
                 ${pageInfo}
                nodes {
                ${repository}
           }  
}`

export const loadMoreUserQuery = `
     query search($searchString: String!,$first: Int = 30 , $after:String!) {
            search(query: $searchString, type: USER,first:$first,after:$after){
            userCount
            ${pageInfo}
                nodes{
                 ${users}
            }  
}`

export const loadMoreRepoQuery = `
     query search($searchString: String!,$first: Int = 30 , $after:String!) {
            search(query: $searchString, type: REPOSITORY,first:$first, after:$after){
                repositoryCount
                 ${pageInfo}
                nodes {
                ${repository}
           }  
   }
  `
