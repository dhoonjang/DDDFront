import medicalImg from "../img/category_img/abraham-popocatl-6-aom-tw-8-ojbo-unsplash.png";
import natureScienceImg from "../img/category_img/hans-reniers-l-qgjcmy-5-qc-m-unsplash.png";
import engineeringImg from "../img/category_img/jimmy-chang-a-ct-8-yc-szpd-e-unsplash.png";
import humanitiesSocialImg from "../img/category_img/kelly-sikkema-et-5-mfj-1-e-b-94-unsplash.png";
import entertainmentSportsImg from "../img/category_img/stephan-valentin-ns-216-n-3-s-caa-unsplash.png";

export interface ICategoryItem {
  id: string;
  type: "big" | "middle";
  name: string;
  discription: string;
  img?: any;
  children?: ICategoryItem[];
}

const CategoryItems: ICategoryItem[] = [
  {
    id: "humanities_social",
    type: "big",
    name: "인문 ∙ 사회계열 ",
    discription: "",
    img: humanitiesSocialImg
  },
  {
    id: "nature_science",
    type: "big",
    name: "자연 ∙ 과학계열",
    discription: "",
    img: natureScienceImg
  },
  {
    id: "engineering",
    type: "big",
    name: "공학계열",
    discription: "",
    img: engineeringImg,
    children: [
      {
        id: "building",
        type: "middle",
        name: "건축",
        discription: ""
      }
    ]
  },
  {
    id: "entertainment_sports",
    type: "big",
    name: "예체능계열",
    discription: "",
    img: entertainmentSportsImg,
    children: [
      {
        id: "dance_sports",
        type: "middle",
        name: "무용 ∙ 체육",
        discription: ""
      },
      {
        id: "theater_movie",
        type: "middle",
        name: "연극 ∙ 영화",
        discription: ""
      },
      {
        id: "art",
        type: "middle",
        name: "미술",
        discription: ""
      },
      {
        id: "music",
        type: "middle",
        name: "음악",
        discription: ""
      },
      {
        id: "application_sports",
        type: "middle",
        name: "응용체육",
        discription: ""
      },
      {
        id: "education",
        type: "middle",
        name: "교육",
        discription: ""
      }
    ]
  },
  {
    id: "medical",
    type: "big",
    name: "의학계열",
    discription: "",
    img: medicalImg
  }
];

export default CategoryItems;
