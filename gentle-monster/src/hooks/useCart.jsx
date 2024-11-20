import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addOrUpdateToCart,
  addToHeart,
  getCart,
  removeFromCart,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid));

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts"], uid);
    },
  });

  const addHeart = useMutation((product) => addToHeart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(["hearts", uid]);
    },
  });

  const removeHeart = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["hearts"], uid);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem, addHeart, removeHeart };
}
