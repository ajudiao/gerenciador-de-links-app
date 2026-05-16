import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { styles } from "./styles";

type Category = {
    name: string,
    icon: keyof  typeof MaterialIcons.glyphMap
}

export function Category(props: Category) {
    return (
        <Pressable style={styles.container}>
            <MaterialIcons name={props.icon} size={16} color={colors.gray[400]} />
            <Text style={styles.name}>{props.name}</Text>
        </Pressable>
    )
}