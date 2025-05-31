class StorageService {
    constructor(key = "storageDb") {
        this.key = key;
        this._reload();
        // Load userKey from localStorage if available
        this.userKey = localStorage.getItem("currentUserKey");
    }

    // Always reload the latest data from localStorage
    _reload() {
        let data = localStorage.getItem(this.key);
        if (data === null) {
            this.db = {};
            localStorage.setItem(this.key, JSON.stringify(this.db));
        } else {
            this.db = JSON.parse(data);
        }
        // Reload userKey from localStorage
        this.userKey = localStorage.getItem("currentUserKey");
    }

    // Set the current user (call this after login)
    setUser(userId) {
        this._reload(); // Always reload before setting user
        this.userKey = userId;
        // Persist userKey to localStorage
        if (userId) {
            localStorage.setItem("currentUserKey", userId);
        } else {
            localStorage.removeItem("currentUserKey");
        }
        if (this.userKey && !this.db[this.userKey]) {
            this.db[this.userKey] = {};
            this._save();
        }
    }

    // Get all data for the current user
    getAll() {
        this._reload();
        if (!this.userKey) return {};
        return { ...this.db[this.userKey] };
    }

    // Get a value by key for the current user
    getItem(itemKey) {
        this._reload();
        if (!this.userKey) return undefined;
        return this.db[this.userKey][itemKey];
    }

    // Set a value by key for the current user
    setItem(itemKey, value) {
        this._reload();
        if (!this.userKey) return;
        this.db[this.userKey][itemKey] = value;
        this._save();
    }

    // Remove a value by key for the current user
    removeItem(itemKey) {
        this._reload();
        if (!this.userKey) return;
        delete this.db[this.userKey][itemKey];
        this._save();
    }

    // Clear all storage for the current user
    clear() {
        this._reload();
        if (!this.userKey) return;
        this.db[this.userKey] = {};
        this._save();
    }

    // Check if a key exists for the current user
    hasItem(itemKey) {
        this._reload();
        if (!this.userKey) return false;
        return Object.prototype.hasOwnProperty.call(this.db[this.userKey], itemKey);
    }

    // Internal method to persist to localStorage
    _save() {
        localStorage.setItem(this.key, JSON.stringify(this.db));
    }
}

const storageService = new StorageService();
export default storageService;