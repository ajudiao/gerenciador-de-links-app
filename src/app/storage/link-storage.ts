import AsyncStorage from "@react-native-async-storage/async-storage"

const LINKS_STORAGE_KEY = "links-storage"

export type LinkProps = {
    id: string
    name: string
    url: string
    category: string
}

async function get(): Promise<LinkProps[]> {
    try {
        const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)

        return storage ? JSON.parse(storage) : []
    } catch {
        return []
    }
}

async function save(newLink: LinkProps) {
    const storage = await get()

    const alreadyExists = storage.some(
        link => link.id === newLink.id
    )

    if (alreadyExists) {
        throw new Error("Link já cadastrado")
    }

    const update = JSON.stringify([
        ...storage,
        newLink
    ])

    await AsyncStorage.setItem(
        LINKS_STORAGE_KEY,
        update
    )
}

export const LinkStorage = {
    get,
    save
}