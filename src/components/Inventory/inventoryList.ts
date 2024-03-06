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
        src: "/assets/inventory/onyx/brown/svo-01.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-02",
        src: "/assets/inventory/onyx/brown/svo-02.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-03",
        src: "/assets/inventory/onyx/brown/svo-03.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-34",
        src: "/assets/inventory/onyx/brown/svo-34.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-35",
        src: "/assets/inventory/onyx/brown/svo-35.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-39",
        src: "/assets/inventory/onyx/brown/svo-39.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    green: [
      {
        name: "SVO-04",
        src: "/assets/inventory/onyx/green/svo-04.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-05",
        src: "/assets/inventory/onyx/green/svo-05.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-06",
        src: "/assets/inventory/onyx/green/svo-06.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-07",
        src: "/assets/inventory/onyx/green/svo-07.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-08",
        src: "/assets/inventory/onyx/green/svo-08.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-09",
        src: "/assets/inventory/onyx/green/svo-09.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-37",
        src: "/assets/inventory/onyx/green/svo-37.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-38",
        src: "/assets/inventory/onyx/green/svo-38.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-40",
        src: "/assets/inventory/onyx/green/svo-40.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    red: [
      {
        name: "SVO-21",
        src: "/assets/inventory/onyx/red/svo-21.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-22",
        src: "/assets/inventory/onyx/red/svo-22.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-26",
        src: "/assets/inventory/onyx/red/svo-26.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-27",
        src: "/assets/inventory/onyx/red/svo-27.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-28",
        src: "/assets/inventory/onyx/red/svo-28.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-30",
        src: "/assets/inventory/onyx/red/svo-30.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    white: [
      {
        name: "SVO-11",
        src: "/assets/inventory/onyx/white/svo-11.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-12",
        src: "/assets/inventory/onyx/white/svo-12.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-13",
        src: "/assets/inventory/onyx/white/svo-13.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-14",
        src: "/assets/inventory/onyx/white/svo-14.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-15",
        src: "/assets/inventory/onyx/white/svo-15.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-16",
        src: "/assets/inventory/onyx/white/svo-16.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-17",
        src: "/assets/inventory/onyx/white/svo-17.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-19",
        src: "/assets/inventory/onyx/white/svo-19.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-29",
        src: "/assets/inventory/onyx/white/svo-29.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-31",
        src: "/assets/inventory/onyx/white/svo-31.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-33",
        src: "/assets/inventory/onyx/white/svo-33.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-41",
        src: "/assets/inventory/onyx/white/svo-41.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
    other: [
      {
        name: "SVO-18",
        src: "/assets/inventory/onyx/other/svo-18.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-20",
        src: "/assets/inventory/onyx/other/svo-20.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-23",
        src: "/assets/inventory/onyx/other/svo-23.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-24",
        src: "/assets/inventory/onyx/other/svo-24.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
      {
        name: "SVO-25",
        src: "/assets/inventory/onyx/other/svo-25.jpg",
        alt: "Onyx Stone Slab",
        type: "Onyx",
      },
    ],
  },
  porcelain: {
    white: [
      {
        name: "SVP-01",
        src: "/assets/inventory/porcelain/white/SVP-01.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-02",
        src: "/assets/inventory/porcelain/white/SVP-02.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-03",
        src: "/assets/inventory/porcelain/white/SVP-03.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-04",
        src: "/assets/inventory/porcelain/white/SVP-04.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-06",
        src: "/assets/inventory/porcelain/white/SVP-06.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-07",
        src: "/assets/inventory/porcelain/white/SVP-07.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-08",
        src: "/assets/inventory/porcelain/white/SVP-08.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-09",
        src: "/assets/inventory/porcelain/white/SVP-09.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-13",
        src: "/assets/inventory/porcelain/white/SVP-13.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-14",
        src: "/assets/inventory/porcelain/white/SVP-14.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-15",
        src: "/assets/inventory/porcelain/white/SVP-15.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-18",
        src: "/assets/inventory/porcelain/white/SVP-18.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-19",
        src: "/assets/inventory/porcelain/white/SVP-19.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
    ],
    dark: [
      {
        name: "SVP-05",
        src: "/assets/inventory/porcelain/dark/SVP-05.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-10",
        src: "/assets/inventory/porcelain/dark/SVP-10.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-11",
        src: "/assets/inventory/porcelain/dark/SVP-11.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-12",
        src: "/assets/inventory/porcelain/dark/SVP-12.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-16",
        src: "/assets/inventory/porcelain/dark/SVP-16.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
      {
        name: "SVP-17",
        src: "/assets/inventory/porcelain/dark/SVP-17.jpg",
        alt: "Porcelain Stone Slab",
        type: "Porcelain",
      },
    ],
  },
  marble: {
    white: [
      {
        name: "SVM-01",
        src: "/assets/inventory/marble/white/svm-01.jpg",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
      {
        name: "SVM-02",
        src: "/assets/inventory/marble/white/svm-02.jpg",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
      {
        name: "SVM-03",
        src: "/assets/inventory/marble/white/svm-03.jpg",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
    ],
    grey: [
      {
        name: "SVM-04",
        src: "/assets/inventory/marble/grey/svm-04.jpg",
        alt: "Porcelain Stone Slab",
        type: "Marble",
      },
    ],
  },
};
