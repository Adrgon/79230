import * as SQLite from "expo-sqlite";

let db;

export async function initializeDatabase() {
  db = await SQLite.openDatabaseAsync("auth.db");
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `);
}

export async function createUser(email, password) {
  return db.runAsync("INSERT INTO users (email, password) VALUES (?, ?)", [
    email.trim().toLowerCase(),
    password,
  ]);
}

export async function loginUser(email, password) {
  return db.getFirstAsync(
    "SELECT id, email FROM users WHERE email = ? AND password = ?",
    [email.trim().toLowerCase(), password]
  );
}
