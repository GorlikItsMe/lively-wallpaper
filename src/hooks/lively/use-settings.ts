import { useLively } from "@/hooks";

export function useSettings() {
    const { properties } = useLively();
    return properties;
}