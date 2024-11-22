// const sdk = require("node-appwrite");

// export const client = new sdk.Client();

// client
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject(process.env.APP_WRITE_PROJECT_ID);

// export const databases = new sdk.Databases(client);

export async function updateDocument(client, collectionId, documentId, data) {
  const databases = new sdk.Databases(client);

  return databases.updateDocument(collectionId, documentId, data);
}