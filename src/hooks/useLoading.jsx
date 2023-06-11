import { useEffect, useState } from "react";
import { Animated, Easing, View } from "react-native";

export function useLoading() {
    const AnimatedView = Animated.createAnimatedComponent(View);
    const [animation] = useState(new Animated.Value(0));

    // spinner
    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear, // Utilizando la propiedad easing
                useNativeDriver: true,
            })
        ).start();
    }, [animation]);

    const animatedStyles = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                }),
            },
            { scaleX: -1 },
        ],
    };

    return {
        AnimatedView,
        animatedStyles,
    };
}
