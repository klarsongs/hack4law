export abstract class LocalStorageService {
  static setItem<T = unknown>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static getItem<T>(key: string): T | null;
  static getItem<T>(key: string, otherwise: T): T;
  static getItem<T>(key: string, otherwise?: T): T | null {
    const data: string | null = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data);
    }

    if (otherwise) {
      return otherwise;
    }

    return null;
  }
}
