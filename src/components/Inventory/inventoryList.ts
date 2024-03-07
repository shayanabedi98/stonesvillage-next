interface InventoryItem {
  name: string;
  src: string;
  alt: string;
  type: string;
}

interface OnyxColors {
  brown: InventoryItem[];
  green: InventoryItem[];
  red: InventoryItem[];
  white: InventoryItem[];
  other: InventoryItem[];
}

interface PorcelainColors {
  white: InventoryItem[];
  dark: InventoryItem[];
}

interface MarbleColors {
  white: InventoryItem[];
  grey: InventoryItem[];
}

interface InventoryList {
  onyx: OnyxColors;
  porcelain: PorcelainColors;
  marble: MarbleColors;
}

export const inventoryList: InventoryList = {
  onyx: {
    brown: [
      {
        name: "SVO-01",
        src: "/assets/inventory/onyx/brown/svo-01.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-02",
        src: "/assets/inventory/onyx/brown/svo-02.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-03",
        src: "/assets/inventory/onyx/brown/svo-03.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-34",
        src: "/assets/inventory/onyx/brown/svo-34.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-35",
        src: "/assets/inventory/onyx/brown/svo-35.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-39",
        src: "/assets/inventory/onyx/brown/svo-39.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    green: [
      {
        name: "SVO-04",
        src: "/assets/inventory/onyx/green/svo-04.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-05",
        src: "/assets/inventory/onyx/green/svo-05.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-06",
        src: "/assets/inventory/onyx/green/svo-06.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-07",
        src: "/assets/inventory/onyx/green/svo-07.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-08",
        src: "/assets/inventory/onyx/green/svo-08.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-09",
        src: "/assets/inventory/onyx/green/svo-09.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-37",
        src: "/assets/inventory/onyx/green/svo-37.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-38",
        src: "/assets/inventory/onyx/green/svo-38.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-40",
        src: "/assets/inventory/onyx/green/svo-40.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    red: [
      {
        name: "SVO-21",
        src: "/assets/inventory/onyx/red/svo-21.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-22",
        src: "/assets/inventory/onyx/red/svo-22.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-26",
        src: "/assets/inventory/onyx/red/svo-26.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-27",
        src: "/assets/inventory/onyx/red/svo-27.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-28",
        src: "/assets/inventory/onyx/red/svo-28.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-30",
        src: "/assets/inventory/onyx/red/svo-30.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    white: [
      {
        name: "SVO-11",
        src: "/assets/inventory/onyx/white/svo-11.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-12",
        src: "/assets/inventory/onyx/white/svo-12.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-13",
        src: "/assets/inventory/onyx/white/svo-13.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-14",
        src: "/assets/inventory/onyx/white/svo-14.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-15",
        src: "/assets/inventory/onyx/white/svo-15.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-16",
        src: "/assets/inventory/onyx/white/svo-16.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-17",
        src: "/assets/inventory/onyx/white/svo-17.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-19",
        src: "/assets/inventory/onyx/white/svo-19.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-29",
        src: "/assets/inventory/onyx/white/svo-29.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-31",
        src: "/assets/inventory/onyx/white/svo-31.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-33",
        src: "/assets/inventory/onyx/white/svo-33.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-41",
        src: "/assets/inventory/onyx/white/svo-41.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    other: [
      {
        name: "SVO-18",
        src: "/assets/inventory/onyx/other/svo-18.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-20",
        src: "/assets/inventory/onyx/other/svo-20.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-23",
        src: "/assets/inventory/onyx/other/svo-23.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-24",
        src: "/assets/inventory/onyx/other/svo-24.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-25",
        src: "/assets/inventory/onyx/other/svo-25.webp",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
  },
  porcelain: {
    white: [
      {
        name: "SVP-01",
        src: "/assets/inventory/porcelain/white/SVP-01.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-02",
        src: "/assets/inventory/porcelain/white/SVP-02.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-03",
        src: "/assets/inventory/porcelain/white/SVP-03.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-04",
        src: "/assets/inventory/porcelain/white/SVP-04.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-06",
        src: "/assets/inventory/porcelain/white/SVP-06.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-07",
        src: "/assets/inventory/porcelain/white/SVP-07.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-08",
        src: "/assets/inventory/porcelain/white/SVP-08.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-09",
        src: "/assets/inventory/porcelain/white/SVP-09.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-13",
        src: "/assets/inventory/porcelain/white/SVP-13.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-14",
        src: "/assets/inventory/porcelain/white/SVP-14.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-15",
        src: "/assets/inventory/porcelain/white/SVP-15.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-18",
        src: "/assets/inventory/porcelain/white/SVP-18.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-19",
        src: "/assets/inventory/porcelain/white/SVP-19.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
    ],
    dark: [
      {
        name: "SVP-05",
        src: "/assets/inventory/porcelain/dark/SVP-05.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-10",
        src: "/assets/inventory/porcelain/dark/SVP-10.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-11",
        src: "/assets/inventory/porcelain/dark/SVP-11.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-12",
        src: "/assets/inventory/porcelain/dark/SVP-12.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-16",
        src: "/assets/inventory/porcelain/dark/SVP-16.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-17",
        src: "/assets/inventory/porcelain/dark/SVP-17.webp",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
    ],
  },
  marble: {
    white: [
      {
        name: "SVM-01",
        src: "/assets/inventory/marble/white/svm-01.webp",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
      {
        name: "SVM-02",
        src: "/assets/inventory/marble/white/svm-02.webp",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
      {
        name: "SVM-03",
        src: "/assets/inventory/marble/white/svm-03.webp",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
    ],
    grey: [
      {
        name: "SVM-04",
        src: "/assets/inventory/marble/grey/svm-04.webp",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
    ],
  },
};
