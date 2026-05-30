import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"


type Props = TouchableOpacityProps & {
    title: string,
}

export function Button({title, ...res}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...res} activeOpacity={0.7}>
            <Text style={styles.title} >
                {title}
            </Text>
        </TouchableOpacity>
    )
}