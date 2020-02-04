export interface ICategoryItem {
  id: string;
  type: "big" | "middle";
  name: string;
  discription: string;
  children?: ICategoryItem[];
}

export interface ICategoryItems {
  items: ICategoryItem[];
}

const CategoryItems: ICategoryItems = {
  items: [
    {
      id: "humanities_social",
      type: "big",
      name: "인문 ∙ 사회계열 ",
      discription: ""
    },
    {
      id: "nature_science",
      type: "big",
      name: "자연 ∙ 과학계열",
      discription: ""
    },
    {
      id: "engineering",
      type: "big",
      name: "공학계열",
      discription: ""
    },
    {
      id: "entertainment_sports",
      type: "big",
      name: "예체능계열",
      discription: ""
    },
    {
      id: "medical",
      type: "big",
      name: "의학계열",
      discription: ""
    }
  ]
};

export default CategoryItems;
