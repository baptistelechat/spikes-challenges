import { create } from "zustand";

type StarInteractionStoreType = {
  selectedStarNumber: number;
  hoveredStarNumber: number;
  setSelectedStarNumber: (newSelectedStarNumber: number) => void;
  setHoveredStarNumber: (newHoveredStarNumber: number) => void;
  resetSelectedStarNumber: () => void;
  resetHoveredStarNumber: () => void;
  resetStarInteraction: () => void;
};

const useStarInteractionStore = create<StarInteractionStoreType>((set) => ({
  selectedStarNumber: 0,
  hoveredStarNumber: 0,
  setSelectedStarNumber: (newSelectedStarNumber: number) => {
    set({
      selectedStarNumber: newSelectedStarNumber,
    });
  },
  setHoveredStarNumber: (newHoveredStarNumber: number) => {
    set({
      hoveredStarNumber: newHoveredStarNumber,
    });
  },
  resetSelectedStarNumber: () => {
    set({ selectedStarNumber: 0 });
  },
  resetHoveredStarNumber: () => {
    set({ hoveredStarNumber: 0 });
  },
  resetStarInteraction: () => {
    set({ selectedStarNumber: 0 });
    set({ hoveredStarNumber: 0 });
  },
}));

export default useStarInteractionStore;
