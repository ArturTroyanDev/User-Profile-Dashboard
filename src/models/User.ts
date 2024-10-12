export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public settings: {theme: string}
    ) {}

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

    updateSettings(newSettings: { theme: string }) {
        this.settings = newSettings
    }
}
