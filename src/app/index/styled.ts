import { StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: colors.gray[900],
    },

    header: {
        width: "100%",
        paddingHorizontal: 24,
        paddingBottom: 20,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: colors.green[900],
    },

    logo: {
        padding: 12,
        borderRadius: 12,
    },

    links: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },

    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 120,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.6)",
    },

    modalContent: {
        padding: 24,
        paddingBottom: 32,

        backgroundColor: colors.gray[900],

        borderTopWidth: 1,
        borderTopColor: colors.gray[800],

        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    modalHeader: {
        width: "100%",
        marginBottom: 32,

        flexDirection: "row",
        alignItems: "center",
    },

    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400],
    },

    modalLinkName: {
        marginBottom: 6,

        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },

    modalUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },

    modalFooter: {
        width: "100%",
        marginTop: 32,
        paddingTop: 16,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
})