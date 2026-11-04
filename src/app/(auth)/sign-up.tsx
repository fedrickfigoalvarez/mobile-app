import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Sign Up Page</Text>
      <Link href={"/(auth)/sign-in"}>SignIn</Link>
    </View>
  );
};

export default SignUp;
