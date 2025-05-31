class HistoryService {
    constructor() {
        let data = localStorage.getItem("historyDb");
        if (data === null) {
            data = {};
            localStorage.setItem("historyDb", JSON.stringify(data));
            this.db = data;
        } else {
            this.db = JSON.parse(data);
        }
        // Load userKey from localStorage if available
        this.userKey = localStorage.getItem("currentUserKey");
    }

    // Set the current user (call this after login)
    setUser(userId) {
        this.userKey = userId;
        // Persist userKey to localStorage
        if (userId) {
            localStorage.setItem("currentUserKey", userId);
        } else {
            localStorage.removeItem("currentUserKey");
        }
        if (this.userKey && !this.db[this.userKey]) {
            this.db[this.userKey] = [];
            this._save();
        }
    }

    addHistory(action) {
        if (!this.userKey) return;
        const entry = {
            action,
            timestamp: new Date().toISOString(),
        };
        this.db[this.userKey].push(entry);
        this._save();
    }

    getUserHistory() {
        if (!this.userKey) return [];
        return this.db[this.userKey];
    }

    getAllHistory() {
        return this.db;
    }

    clearUserHistory() {
        if (!this.userKey) return;
        this.db[this.userKey] = [];
        this._save();
    }

    clearAllHistory() {
        Object.keys(this.db).forEach((user) => {
            this.db[user] = [];
        });
        this._save();
    }

    _save() {
        localStorage.setItem("historyDb", JSON.stringify(this.db));
    }
}

const historyService = new HistoryService();
export default historyService;