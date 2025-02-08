/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import type { } from "react/experimental"

// Try load useEffectEvent
if (React.experimental_useEffectEvent == undefined) {
    throw new Error("React.experimental_useEffectEvent is not found. You must use react experimental branch")
}
const useEffectEvent = React.experimental_useEffectEvent


// Copied from https://github.com/uidotdev/usehooks/blob/v2.4.1-experimental.1/index.js but fixed
export function useIntervalWhen(cb: () => any, { ms, when, startImmediately }: {
    ms: number,
    when: boolean,
    startImmediately?: boolean
}) {
    const id = React.useRef<null | number>(null);
    const onTick = useEffectEvent(cb);
    const immediatelyCalled = React.useRef(
        startImmediately === true ? false : null
    );

    const handleClearInterval = React.useCallback(() => {
        if (id.current != null) window.clearInterval(id.current);
        immediatelyCalled.current = false;
    }, []);

    React.useEffect(() => {
        if (when === true) {
            id.current = window.setInterval(onTick, ms);

            if (startImmediately === true && immediatelyCalled.current === false) {
                onTick();
                immediatelyCalled.current = true;
            }

            return handleClearInterval;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ms, when, startImmediately, handleClearInterval]);

    return handleClearInterval;
}