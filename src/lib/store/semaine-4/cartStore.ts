import { create } from "zustand";

type StarInteractionStoreType = {
  cart: number;
  setCart: (newCart: number) => void;
  resetCart: (newCart: number) => void;
};

const useCartStore = create<StarInteractionStoreType>((set) => ({
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
