import { Alert, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Text } from "react-native";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { LinkStorage } from "../storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("");

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) return Alert.alert("Categoria", "Selecione a categoria");

      if (!name.trim()) return Alert.alert("Nome", "informe um nome");

      if (!name.trim()) return Alert.alert("URL", "Informe a URL");

      await LinkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      })

      // const data = await LinkStorage.get()
      // console.log(data)

    } catch (error) {
      Alert.alert("Error", "Não foi possível salvar o link")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
