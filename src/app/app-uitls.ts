export class AppUtils {
    public static isDefined<T>(value: T): boolean {
        return (value !== null && value !== undefined);
    }
    public static stringHasValue(value: string): boolean {
        return (AppUtils.isDefined(value) && (AppUtils.isString(value) ? value.trim().length > 0 : true));
    }
    public static isString(value: string): boolean {
        return typeof value === 'string';
    }
}