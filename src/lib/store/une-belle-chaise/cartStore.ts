import { create } from "zustand";

type CartStoreType = {
  cart: number;
  setCart: (newCart: number) => void;
  resetCart: () => void;
  wishlist: boolean;
  setWishlist: (newWishlist: boolean) => void;
  resetWishlist: () => void;
};

const useCartStore = create<CartStoreType>((set) => ({
  cart: 0,
  setCart: (newCart: number) => {
    set({
      cart: newCart,
    });
  },
  resetCart: () => {
    set({ cart: 0 });
  },
  
  wishlist: false,
  setWishlist: (newWishlist: boolean) => {
    set({
      wishlist: newWishlist,
    });
  },
  resetWishlist: () => {
    set({ wishlist: false });
  },
}));

export default useCartStore;
