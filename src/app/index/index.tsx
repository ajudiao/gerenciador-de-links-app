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
  Alert,
} from "react-native";
import { styles } from "./styled";
import { Options } from "@/components/options";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { categories } from "@/utils/categories";
import { LinkProps, LinkStorage } from "../storage/link-storage";


export default function Index() {
  const [links, setLinks] = useState<LinkProps[]>([])
  const [category, setCategory] = useState(categories[0].name)

  async function  getLinks() {
      try {
        const response = await LinkStorage.get()

      } catch (error) {
          Alert.alert("Erro", "Não foi possível listar os links")
      }
  }

  useEffect(() => {
    getLinks()

  }, [category])

  return (
    <View style={[styles.container, { backgroundColor: colors.gray[950] }]}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.5} onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
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
