import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={[styles.container, { backgroundColor: colors.gray[950] }]}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
