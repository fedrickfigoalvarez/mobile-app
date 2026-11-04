import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Ingsights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Ingsight</Text>
    </SafeAreaView>
  );
};

export default Ingsights;
