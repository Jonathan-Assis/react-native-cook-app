import { Image, Pressable, PressableProps, Text, View } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "@/theme"
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated"
import { Button } from "../Button"

export type SelectedProps = {
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
    return (
        <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400} />
            </View>

            <Button title="Encontrar" onPress={onSearch} />
        </Animated.View>
    )
}
