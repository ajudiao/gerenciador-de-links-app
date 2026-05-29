import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { styles } from "./styled";
import { Options } from "@/components/options";
import { router } from "expo-router";


export default function Index() {
  return (
    <View style={[styles.container, { backgroundColor: colors.gray[950] }]}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.5} onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rockeseat"
            url="jsjdjsd"
            onDetails={() => console.log("clicou")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://www.rocketseat.com.br</Text>
          </View>

          <View style={styles.modalFooter}>
            <Options name="Exclir" icon="delete" variant="secondary" />
            <Options name="Abrir" icon="language" variant="primary" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
