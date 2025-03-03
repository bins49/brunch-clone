export interface RecommendedItem {
  id: number;
  title: string;
  description: string;
  author: string;
  image?: string;
}

export const recommendedData: RecommendedItem[] = [
  {
    id: 1,
    title: "1인 1감사를 서 봤을 뿐인데 아이에게 좋이 난 이유",
    description:
      "감사일기로 시작된 변화, 아이와 함께하는 매일의 감사 습관이 우리 가족에게 가져다 준 특별한 선물",
    author: "센스쟁이",
  },
  {
    id: 2,
    title: "고양이 키우는 보람이 있다",
    description:
      "반려묘와의 일상, 그리고 우리가 서로에게 주는 작은 행복들에 대하여",
    author: "김작가",
  },
  {
    id: 3,
    title: "월 600 삼성전자 부장님",
    description:
      "직장인 일상의 소소한 이야기, 월급쟁이의 희로애락을 담은 에세이",
    author: "월급쟁이",
  },
  {
    id: 4,
    title: "시부모님과 함께 사는 법",
    description: "세대 차이를 넘어 서로를 이해하고 존중하는 방법에 대한 이야기",
    author: "행복한며느리",
  },
  {
    id: 5,
    title: "결혼한 지 5년, 말 안 하고 산 지 3년",
    description: "현대 부부의 솔직한 이야기, 그리고 우리가 찾은 해결책",
    author: "김정영",
  },
  {
    id: 6,
    title: "새벽 모닝 루틴의 기적",
    description: "하루를 바꾸는 아침 습관, 그리고 그 속에서 발견한 나만의 시간",
    author: "얼리버드",
  },
  {
    id: 7,
    title: "나는 브런치에서 책을 쓴다",
    description:
      "디지털 시대의 새로운 글쓰기, 온라인 플랫폼에서 작가로 성장하기",
    author: "디지털작가",
  },
  {
    id: 8,
    title: "프리랜서로 살아남기",
    description: "자유와 책임 사이, 나만의 일하는 방식을 찾아가는 여정",
    author: "자유인",
  },
  {
    id: 9,
    title: "여행작가의 숨은 명소",
    description:
      "관광객들이 모르는 진짜 현지의 모습, 로컬이 사랑하는 특별한 장소들",
    author: "여행쟁이",
  },
  {
    id: 10,
    title: "미니멀 라이프 1년 차",
    description: "물건을 줄이고 행복을 늘리는 미니멀리스트의 일상 이야기",
    author: "심플리스트",
  },
  {
    id: 11,
    title: "퇴사 후 카페 창업기",
    description:
      "회사를 그만두고 시작한 작은 카페, 그곳에서 찾은 새로운 삶의 의미",
    author: "카페지기",
  },
  {
    id: 12,
    title: "육아와 일의 균형잡기",
    description:
      "워킹맘의 하루 24시간, 완벽하지 않아도 행복한 우리 가족의 이야기",
    author: "슈퍼맘",
  },
];
