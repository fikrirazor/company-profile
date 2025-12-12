export interface User {
  email: string;
  name?: string;
  "user-token": string;
  ownerId: string;
  objectId: string;
  created: number;
  updated: number;
  // Add other fields as returned by Backendless
}
