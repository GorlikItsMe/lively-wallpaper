import { useLively } from "@/hooks";

export function useSettings<T extends string | number | boolean>(key: string, defaultValue: T): T {
    const { properties } = useLively();
    return properties[key] as T || defaultValue;
}
