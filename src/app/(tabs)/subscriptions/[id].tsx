import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text>SubscriptionsDetails: {id}</Text>
      <Link className="button" href={"/"}>
        Go Back
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
