export interface ICategoryItem {
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
      type: "big",
      name: "인문 ∙ 사회계열 ",
      discription: ""
    },
    {
      type: "big",
      name: "자연 ∙ 과학계열",
      discription: ""
    },
    {
      type: "big",
      name: "공학계열",
      discription: ""
    },
    {
      type: "big",
      name: "예체능계열",
      discription: ""
    },
    {
      type: "big",
      name: "의학계열",
      discription: ""
    }
  ]
};

export default CategoryItems;
