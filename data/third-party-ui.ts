export interface ThirdPartyGroupOption {
  id: string;
  label: string;
  financialOptions: number[];
}

export const thirdPartyGroups: ThirdPartyGroupOption[] = [
  {
    id: "pride-peykan-renault",
    label: "پراید، پیکان، رنو",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "four-cylinder",
    label: "۴ سیلندر",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "six-cylinder",
    label: "۶ سیلندر",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "van",
    label: "ون",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "taxi-four-cylinder",
    label: "تاکسی ۴ سیلندر",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "pickup-one-ton",
    label: "وانت تا ۱ تن",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "pickup-two-three-ton",
    label: "وانت ۲ تن و ۳ تن",
    financialOptions: [70, 150, 250, 350],
  },
  {
    id: "motorcycle",
    label: "موتور",
    financialOptions: [70, 200],
  },
];

export const discountOptions = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70,
];
