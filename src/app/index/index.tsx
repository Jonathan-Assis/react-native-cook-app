import { Alert, ScrollView, Text, View } from "react-native"
import { styles } from "./styles"
import { Ingredient, Selected } from "@/components"
import { useState } from "react"
import { router } from "expo-router"

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])
    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) },
        ])
    }

    function handleSearch() {
        router.navigate("/recipes/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingredient
                        key={index}
                        name="Maça"
                        image=""
                        selected={selected.includes(index.toString())}
                        onPress={() => handleToggleSelected(index.toString())}
                    />
                ))}
            </ScrollView>
            {selected.length > 0 && (
                <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch} />
            )}
        </View>
    )
}
