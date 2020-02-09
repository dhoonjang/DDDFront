import WactivityOrganizeImg from "../img/board_img/activity_organize-white.png";
import activityOrganizeImg from "../img/board_img/activity_organize.png";
import WgradeOrganizeImg from "../img/board_img/grade_organize-white.png";
import gradeOrganizeImg from "../img/board_img/grade_organize.png";
import WinterviewImg from "../img/board_img/interview-white.png";
import interviewImg from "../img/board_img/interview.png";
import WschoolMajorImg from "../img/board_img/school_major-white.png";
import schoolMajorImg from "../img/board_img/school_major.png";
import WselfImprovementImg from "../img/board_img/self_improvement-white.png";
import selfImprovementImg from "../img/board_img/self_improvement.png";
import WselfIntroductionImg from "../img/board_img/self_introduction-white.png";
import selfIntroductionImg from "../img/board_img/self_introduction.png";

export interface IBoard {
  id: string;
  name: string;
  discription: string;
  img: any;
  wimg?: any;
}

const Boards: IBoard[] = [
  {
    id: "self_improvement",
    name: "자기계발 컨텐츠",
    discription:
      "면접 때 무슨 말을 해야 하지..? 내 머릿 속을 가득 채워 줄 지식거리들을 한 곳에 모았어요",
    img: selfImprovementImg,
    wimg: WselfImprovementImg
  },
  {
    id: "activity_organize",
    name: "활동 정리",
    discription: "대입에 도움이 될만한 활동들 정리, 추천해 드려요",
    img: activityOrganizeImg,
    wimg: WactivityOrganizeImg
  },
  {
    id: "grade_organize",
    name: "성적 정리",
    discription: "내 성적을 입력해서 다양한 합격자들의 성적과 비교해보세요",
    img: gradeOrganizeImg,
    wimg: WgradeOrganizeImg
  },
  {
    id: "school_major",
    name: "학교 ∙ 과 열람",
    discription: "다양한 학교와 학과에 대한 정보가 가득해요",
    img: schoolMajorImg,
    wimg: WschoolMajorImg
  },
  {
    id: "interview",
    name: "면접",
    discription: "다양한 면접 팁 모음",
    img: interviewImg,
    wimg: WinterviewImg
  },
  {
    id: "self_introduction",
    name: "자소서",
    discription: "다양한 자기소개서에 대한 정보가 가득",
    img: selfIntroductionImg,
    wimg: WselfIntroductionImg
  }
];

export default Boards;
