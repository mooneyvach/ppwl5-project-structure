/* =========================
   ENV (Issue: Langsung di index)
   Tugas: 
   1. pindahkan ke file khusus (config/env.ts), ok
   2. gunakan `export const env = {...}` untuk menyimpan data env, ok
   3. tambahkan property DB_FILE berisi process.env.DB_FILE ke dalam `const env = {...}`, ok
   4. cek kondisi if (!process.env.DB_FILE) console.warn("⚠ DB_FILE not set, using default database.sqlite");, ok
========================= */

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_FILE: process.env.DB_FILE || "database.sqlite"
};

if (!process.env.DB_FILE) {
  console.warn("⚠ DB_FILE not set, using default database.sqlite");
}
const NODE_ENV = process.env.NODE_ENV || "development";

console.log("Running in:", NODE_ENV);