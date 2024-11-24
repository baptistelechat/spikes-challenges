import { create } from "zustand";

type StarInteractionStoreType = {
  selectedStarNumber: number;
  hoveredStarNumber: number;
  lastStarNumber: string;
  allNote: string;
  setSelectedStarNumber: (newSelectedStarNumber: number) => void;
  setHoveredStarNumber: (newHoveredStarNumber: number) => void;
  setLastStarNumber: (newLastStarNumber: string) => void;
  setAllNote: (newAllNote: string) => void;
  resetSelectedStarNumber: () => void;
  resetHoveredStarNumber: () => void;
  resetStarInteraction: () => void;
};

let lastStarNumber: string = "";
const allNote = localStorage.getItem("starNumber");
if (allNote) {
  lastStarNumber = allNote.split("|")[0];
}

const useStarInteractionStore = create<StarInteractionStoreType>((set) => ({
  selectedStarNumber: 0,
  hoveredStarNumber: 0,
  lastStarNumber,
  allNote: allNote ?? "",
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
  setLastStarNumber: (newLastStarNumber: string) => {
    set({
      lastStarNumber: newLastStarNumber,
    });
  },
  setAllNote: (newAllNote: string) => {
    set({
      allNote: newAllNote,
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
