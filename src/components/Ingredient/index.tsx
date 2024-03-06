import { Image, Pressable, PressableProps, Text } from "react-native"
import { styles } from "./styles"

export type IngredientsProps = PressableProps & {
    name: string
    image: string
    selected?: boolean
}

export function Ingredient({ name, image, selected, ...rest }: IngredientsProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image style={styles.image} source={require("../../../images/apple.png")} />
            <Text style={styles.title}>{name}</Text>
        </Pressable>
    )
}
