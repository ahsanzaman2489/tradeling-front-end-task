export const searchUserQuery = `
     query search($searchString: String!,$first: Int = 100) {
            search(query: $searchString, type: USER,first:$first){
            userCount
                nodes{
                 ... on User {           
                      avatarUrl(size: 10)
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
                }
            }  
   }
  `

export const searchRepoQuery = `
     query search($searchString: String!,$first: Int = 100) {
            search(query: $searchString, type: REPOSITORY,first:$first){
                repositoryCount
                nodes {
               ... on Repository {
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
               }
           }  
   }
  `
