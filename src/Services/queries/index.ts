export const searchUserQuery = `
     query search($searchString: String!,$first: Int = 100) {
            search(query: $searchString, type: USER,first:$first){
            userCount
                nodes{
                  ... on User {
                    id
                    bio
                    name
                    email
                    login
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
                  id
                  name
                  url
                  owner {
                    id
                    login
                    ... on User {
                      email
                    }
                }
               }
               }
           }  
   }
  `
