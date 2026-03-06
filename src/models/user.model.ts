/* =========================
   MODEL (Issue: Langsung di index)
   Tugas:
    1. Pindahkan ke file khusus (user.model), dalam folder yang sesuai, ok
    2. gunakan export class ..., ok
    3. Property id jadikan opsional, ok
========================= */
interface User {
    id?: number;
    name: string;
    role: string;
}

export class UserModel implements User {
    id?: number;
    name: string;
    role: string;

    constructor(data: User) {
        this.id = data.id;
        this.name = data.name;
        this.role = data.role;
    }

    get displayName() {
        return `${this.name} (${this.role})`;
    }
}