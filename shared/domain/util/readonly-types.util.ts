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
    
}