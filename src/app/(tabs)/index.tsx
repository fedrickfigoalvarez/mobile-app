import "@/global.css";

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className=" flex-1 items-center justify-center bg-primary ">
      <Text className="font-semibold  text-nero">Set Up Tailwind</Text>
      <Link className="button" href={"/onBoarding"}>
        {" "}
        onBoarding
      </Link>
      <Link className="button" href={"/(auth)/sign-in"}>
        SignIn
      </Link>
      <Link className="button" href={"/(auth)/sign-up"}>
        SignUp
      </Link>
      <Link className="button" href={"/subscriptions/Spotify"}>
        Tes Pages
      </Link>
      <Link
        className="button"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "Claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
