import { create } from "zustand";

type CartStoreType = {
  cart: number;
  setCart: (newCart: number) => void;
  resetCart: () => void;
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
}));

export default useCartStore;
