import { Text, View } from "react-native";
import { styles } from "./styled";
import { colors } from "@/styles/colors";

export default function Index() {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.gray[950] }
      ]}
    >
      <Text style={styles.title}>Hello, World ANDRE!</Text>
    </View>
  );
}