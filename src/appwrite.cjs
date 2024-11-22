import { sdk } from "node-appwrite";

export const client = new sdk.Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.APP_WRITE_PROJECT_ID);

export const databases = new sdk.Databases(client);

export async function updateDocument(collectionId, documentId, data) {
  return databases.updateDocument(collectionId, documentId, data);
}