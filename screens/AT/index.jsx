import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function TP1() {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <View>
          {Array.from({ length: 3}, (_, i) => (
            <Button
              key={i}
              title={`Exercício - ${i + 1}`}
              onPress={() => navigation.navigate(`Exercício - ${i + 1}`, { id: i + 1 })}
            />
          ))}
        </View>
    </ScrollView>
  );
}
