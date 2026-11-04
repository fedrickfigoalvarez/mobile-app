import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 justify-center items-center bg-secondary">
      <Text>sign-in</Text>
      <Link href={"/(auth)/sign-up"}>Create Account</Link>
    </View>
  );
};

export default SignIn;
