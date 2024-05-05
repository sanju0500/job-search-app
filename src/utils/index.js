// Search Filter - Options List
export const roleOptions = [
  "Backend",
  "Frontend",
  "IOS",
  "Android",
  "Tech Lead",
];

export const minExpOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const jobTypeOptions = ["Remote", "Onsite"];

export const minBasePayOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Dropdown MenuProps
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
