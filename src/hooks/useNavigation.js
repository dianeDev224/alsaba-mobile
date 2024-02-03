import { useState, useTransition } from "react";


export function UseNavigation(initialeRoute) {
    const [isPending, startTransition] = useTransition();
    const [currentRoute, setCurrentRoute] = useState(initialeRoute)

    function navigateTo(currentRoute) {
        startTransition(() => {
            setCurrentRoute(currentRoute)
        })
    }

    return {
        currentRoute: currentRoute,
        navigateTo: navigateTo
    }
}