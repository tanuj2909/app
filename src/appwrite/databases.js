import { ID } from "appwrite";
import { databases } from "./config";
import { config } from "../config/config";

class DatabaseService {
    databases = databases
    constructor( collections) {
        this.collections = collections;
        this.db = this._generateCollectionMethods();
    }

    _generateCollectionMethods() {
        const db = {};
        this.collections.forEach((col) => {
            db[col.name] = {
                create: (payload, permissions, id = ID.unique()) =>
                    this.databases.createDocument(col.dbId, col.id, id, payload, permissions),

                update: (id, payload, permissions) =>
                    this.databases.updateDocument(col.dbId, col.id, id, payload, permissions),

                delete: (id) => this.databases.deleteDocument(col.dbId, col.id, id),

                list: (queries = []) =>
                    this.databases.listDocuments(col.dbId, col.id, queries),

                get: (id) => this.databases.getDocument(col.dbId, col.id, id),
            };
        });
        return db;
    }

    getCollection(name) {
        return this.db[name];
    }
}

const collections = [
    {
        dbId: config.appwriteDatabaseID,
        id: config.appwriteCollectionNameID,
        name: "name",
    },
];


const dbService = new DatabaseService(databases, collections);
export const db = dbService.db;
