import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: colors.gray[900],
    },

    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingHorizontal: 24,
        paddingBottom: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.gray[100],
    },

    label: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray[400],

        paddingHorizontal: 24,
    },
});