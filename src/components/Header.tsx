import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "@router/useRouter";
import { Appbar } from "react-native-paper";

export default function Header({ title }: { title: string }) {
  const insets = useSafeAreaInsets();
  const { goBack } = useRouter();

  return (
    <Appbar.Header elevated mode="small">
      <Appbar.BackAction
        onPress={() => {
          goBack();
        }}
      />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
