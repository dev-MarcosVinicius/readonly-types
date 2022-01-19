export class ReadOnlyUtil {
    static intersperse<T>(array: readonly T[], separator: T): T[] {
        const newArray: T[] = [];
        for (const element of array) {
            if (newArray.length !== 0) {
                newArray.push(separator);
            }
            newArray.push(element);
        }
        return newArray;
    }

    static swapx<T, U>(tuple: readonly [T, U]): [U, T] {
        const [first, second] = tuple;
        return [second, first];
    }

    static async fetchJSON(url: string, method: HTTPRequestMethod) {
        return await fetch(url, { method })
    }
}