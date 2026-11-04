import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 gap-3">
      <Text className="font-semibold  text-destructive">Set Up Tailwind</Text>
      <Link
        className="px-3 py-2 bg-primary text-white  rounded-md"
        href={"/onboarding"}
      >
        onBoarding
      </Link>
      <Link
        className="px-3 py-2 bg-primary text-white rounded-md"
        href={"/(auth)/sign-in"}
      >
        SignIn
      </Link>
      <Link
        className="px-3 py-2 bg-primary text-white rounded-md"
        href={"/(auth)/sign-up"}
      >
        SignUp
      </Link>

      <Link href="/subscriptions/Spotify">Spotify Subs</Link>

      <Link
        className="px-3 py-2 bg-primary text-white rounded-md"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "Claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
