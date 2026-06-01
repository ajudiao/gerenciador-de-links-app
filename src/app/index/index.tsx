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
import { router, useFocusEffect } from "expo-router";
import { useEffect, useState, useCallback, use } from "react";
import { categories } from "@/utils/categories";
import { LinkProps, LinkStorage } from "../storage/link-storage";


export default function Index() {
  const [link, setLink] = useState<LinkProps>({} as LinkProps)
  const [showModal, setShowModal] = useState(false)
  const [links, setLinks] = useState<LinkProps[]>([])
  const [category, setCategory] = useState(categories[0].name)

  async function  getLinks() {
      try {
        const response = await LinkStorage.get()

        const filtered = response.filter((link) => link.category === category)
        setLinks(filtered)

      } catch (error) {
          Alert.alert("Erro", "Não foi possível listar os links")
      }
  }

  useFocusEffect(useCallback(() => {
    getLinks()
  }, [category]))

  function handleDetails(selected: LinkProps) {
    setShowModal(true)
    setLink(selected)
  }

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
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{ link.category }</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{ link.name }</Text>
            <Text style={styles.modalUrl}>{ link.url }</Text>
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
