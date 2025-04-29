export const config = {
    appwriteEndpoint: String(import.meta.env.VITE_ENDPOINT),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionNameID: String(import.meta.env.VITE_COLLECTION_ID_NAME)

}