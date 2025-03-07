import { Article } from "../types/article";

// mock data;
export const articles: Article[] = [
  // Monday (월요일) articles
  {
    id: 1,
    title: "나 때려가 글을 써도 된다면",
    subtitle: "책장에 남겨놓은 카페",
    author: "by 김구욱",
    isNew: true,
    category: "latest",
    day: "월",
    publishedAt: "2024-03-18T09:00:00Z",
    supportCount: 156,
    likeitCount: 89,
  },
  {
    id: 2,
    title: "40대 아저씨의 마블 속 캐스터",
    subtitle: "좋죽한 삶을 살 것인가?",
    author: "by 연금술사",
    image: "/path/to/marvel.jpg",
    category: "latest",
    day: "월",
    publishedAt: "2024-03-17T15:30:00Z",
    supportCount: 423,
    likeitCount: 167,
  },
  {
    id: 3,
    title: "월요일의 커피 한 잔",
    subtitle: "아침을 여는 방법",
    author: "by 커피홀릭",
    image: "/path/to/coffee.jpg",
    category: "support",
    day: "월",
    publishedAt: "2024-03-16T11:20:00Z",
    supportCount: 245,
    likeitCount: 378,
  },
  {
    id: 4,
    title: "직장인의 월요일",
    subtitle: "새로운 시작을 위한 루틴",
    author: "by 월요병극복러",
    category: "likeit",
    day: "월",
  },
  {
    id: 5,
    title: "월요일의 독서모임",
    subtitle: "함께 읽는 즐거움",
    author: "by 책벌레",
    image: "/path/to/books.jpg",
    category: "latest",
    day: "월",
  },
  {
    id: 6,
    title: "월요일의 요가일기",
    subtitle: "마음과 몸의 균형",
    author: "by 요가마스터",
    category: "support",
    day: "월",
    supportCount: 189,
  },
  {
    id: 7,
    title: "월요일의 식물관리",
    subtitle: "도시 속 작은 정원",
    author: "by 식물집사",
    image: "/path/to/plants.jpg",
    category: "likeit",
    day: "월",
  },

  // Tuesday (화요일) articles
  {
    id: 8,
    title: "화요일의 발견",
    subtitle: "일상의 특별한 순간",
    author: "by 화요작가",
    image: "/path/to/tuesday.jpg",
    category: "latest",
    day: "화",
  },
  {
    id: 9,
    title: "화요일의 맛집탐방",
    subtitle: "서울 숨은 맛집",
    author: "by 미식탐험가",
    image: "/path/to/food.jpg",
    category: "support",
    day: "화",
    supportCount: 320,
  },
  {
    id: 10,
    title: "화요일의 전시회",
    subtitle: "예술과의 만남",
    author: "by 예술가",
    category: "likeit",
    day: "화",
  },
  {
    id: 11,
    title: "화요일의 음악감상",
    subtitle: "클래식 한 스푼",
    author: "by 음악가",
    image: "/path/to/music.jpg",
    category: "latest",
    day: "화",
    publishedAt: "2024-03-15T14:30:00Z",
    supportCount: 245,
    likeitCount: 167,
  },
  {
    id: 12,
    title: "화요일의 영화관",
    subtitle: "시네마 파라다이스",
    author: "by 영화광",
    category: "support",
    day: "화",
    supportCount: 275,
  },
  {
    id: 13,
    title: "화요일의 산책",
    subtitle: "도시의 숨결",
    author: "by 산책러",
    image: "/path/to/walk.jpg",
    category: "likeit",
    day: "화",
  },
  {
    id: 14,
    title: "화요일의 독서",
    subtitle: "책 한 권의 여유",
    author: "by 책읽는밤",
    category: "latest",
    day: "화",
  },

  // Wednesday (수요일) articles
  {
    id: 15,
    title: "수요일의 예술",
    subtitle: "도시의 갤러리 산책",
    author: "by 예술가",
    image: "/path/to/art.jpg",
    category: "latest",
    day: "수",
  },
  {
    id: 16,
    title: "수요일의 음악",
    subtitle: "클래식 감상",
    author: "by 음악가",
    category: "likeit",
    day: "수",
  },
  {
    id: 17,
    title: "수요일의 요리교실",
    subtitle: "집에서 만드는 레스토랑",
    author: "by 요리사",
    image: "/path/to/cooking.jpg",
    category: "support",
    day: "수",
    supportCount: 412,
  },
  {
    id: 18,
    title: "수요일의 와인",
    subtitle: "와인 한 잔의 여유",
    author: "by 소믈리에",
    category: "latest",
    day: "수",
  },
  {
    id: 19,
    title: "수요일의 드로잉",
    subtitle: "손그림의 매력",
    author: "by 아티스트",
    image: "/path/to/drawing.jpg",
    category: "likeit",
    day: "수",
  },
  {
    id: 20,
    title: "수요일의 명상",
    subtitle: "마음의 쉼표",
    author: "by 마음지기",
    category: "support",
    day: "수",
    supportCount: 198,
  },
  {
    id: 21,
    title: "수요일의 공방",
    subtitle: "손으로 만드는 이야기",
    author: "by 공예가",
    image: "/path/to/craft.jpg",
    category: "latest",
    day: "수",
  },

  // Thursday (목요일) articles
  {
    id: 22,
    title: "목요일의 맛집",
    subtitle: "서울 맛집 탐방",
    author: "by 미식가",
    image: "/path/to/food.jpg",
    category: "latest",
    day: "목",
    isNew: true,
  },
  {
    id: 23,
    title: "목요일의 산책",
    subtitle: "도시의 공원에서",
    author: "by 산책러",
    category: "support",
    day: "목",
    supportCount: 180,
  },
  {
    id: 24,
    title: "목요일의 디저트",
    subtitle: "달콤한 오후",
    author: "by 디저트메이커",
    image: "/path/to/dessert.jpg",
    category: "likeit",
    day: "목",
  },
  {
    id: 25,
    title: "목요일의 독서모임",
    subtitle: "책과 함께하는 시간",
    author: "by 책벌레",
    category: "latest",
    day: "목",
  },
  {
    id: 26,
    title: "목요일의 플레이리스트",
    subtitle: "음악으로 채우는 하루",
    author: "by 음악큐레이터",
    image: "/path/to/playlist.jpg",
    category: "support",
    day: "목",
    supportCount: 290,
  },
  {
    id: 27,
    title: "목요일의 홈카페",
    subtitle: "집에서 즐기는 커피",
    author: "by 바리스타",
    category: "likeit",
    day: "목",
  },
  {
    id: 28,
    title: "목요일의 그림일기",
    subtitle: "일상의 스케치",
    author: "by 일러스트레이터",
    image: "/path/to/sketch.jpg",
    category: "latest",
    day: "목",
  },

  // Friday (금요일) articles
  {
    id: 29,
    title: "금요일의 영화",
    subtitle: "주말의 시작",
    author: "by 영화광",
    image: "/path/to/movie.jpg",
    category: "latest",
    day: "금",
  },
  {
    id: 30,
    title: "금요일의 재즈바",
    subtitle: "음악이 흐르는 밤",
    author: "by 재즈피아니스트",
    category: "support",
    day: "금",
    supportCount: 340,
  },
  {
    id: 31,
    title: "금요일의 전시",
    subtitle: "예술과의 만남",
    author: "by 큐레이터",
    image: "/path/to/exhibition.jpg",
    category: "likeit",
    day: "금",
  },
  {
    id: 32,
    title: "금요일의 맥주",
    subtitle: "수제맥주 이야기",
    author: "by 맥주소믈리에",
    category: "latest",
    day: "금",
  },
  {
    id: 33,
    title: "금요일의 공연",
    subtitle: "라이브 음악의 밤",
    author: "by 공연기획자",
    image: "/path/to/concert.jpg",
    category: "support",
    day: "금",
    supportCount: 278,
  },
  {
    id: 34,
    title: "금요일의 야경",
    subtitle: "도시의 불빛",
    author: "by 사진작가",
    category: "likeit",
    day: "금",
  },
  {
    id: 35,
    title: "금요일의 파티",
    subtitle: "주말을 여는 방법",
    author: "by 파티플래너",
    image: "/path/to/party.jpg",
    category: "latest",
    day: "금",
  },

  // Saturday (토요일) articles
  {
    id: 36,
    title: "토요일의 브런치",
    subtitle: "여유로운 아침",
    author: "by 브런치메이커",
    image: "/path/to/brunch.jpg",
    category: "latest",
    day: "토",
  },
  {
    id: 37,
    title: "토요일의 피크닉",
    subtitle: "공원에서의 하루",
    author: "by 피크닉러",
    category: "support",
    day: "토",
    supportCount: 425,
  },
  {
    id: 38,
    title: "토요일의 마켓",
    subtitle: "플리마켓 탐방",
    author: "by 마켓큐레이터",
    image: "/path/to/market.jpg",
    category: "likeit",
    day: "토",
  },
  {
    id: 39,
    title: "토요일의 베이킹",
    subtitle: "달콤한 주말",
    author: "by 베이커",
    category: "latest",
    day: "토",
  },
  {
    id: 40,
    title: "토요일의 캠핑",
    subtitle: "자연과 함께하는 시간",
    author: "by 캠핑러",
    image: "/path/to/camping.jpg",
    category: "support",
    day: "토",
    supportCount: 312,
  },
  {
    id: 41,
    title: "토요일의 공방",
    subtitle: "핸드메이드의 즐거움",
    author: "by 공예가",
    category: "likeit",
    day: "토",
  },
  {
    id: 42,
    title: "토요일의 서점",
    subtitle: "책과 함께하는 주말",
    author: "by 북디자이너",
    image: "/path/to/bookstore.jpg",
    category: "latest",
    day: "토",
  },

  // Sunday (일요일) articles
  {
    id: 43,
    title: "일요일의 명상",
    subtitle: "마음의 휴식",
    author: "by 명상가",
    image: "/path/to/meditation.jpg",
    category: "latest",
    day: "일",
  },
  {
    id: 44,
    title: "일요일의 정원",
    subtitle: "식물과의 대화",
    author: "by 가드너",
    category: "support",
    day: "일",
    supportCount: 267,
  },
  {
    id: 45,
    title: "일요일의 요리",
    subtitle: "집밥의 행복",
    author: "by 홈쿡마스터",
    image: "/path/to/cooking.jpg",
    category: "likeit",
    day: "일",
  },
  {
    id: 46,
    title: "일요일의 드로잉",
    subtitle: "그림으로 쓰는 일기",
    author: "by 아티스트",
    category: "latest",
    day: "일",
  },
  {
    id: 47,
    title: "일요일의 음악회",
    subtitle: "클래식과 함께",
    author: "by 바이올리니스트",
    image: "/path/to/concert-hall.jpg",
    category: "support",
    day: "일",
    supportCount: 389,
  },
  {
    id: 48,
    title: "일요일의 박물관",
    subtitle: "예술의 산책",
    author: "by 도슨트",
    category: "likeit",
    day: "일",
  },
  {
    id: 49,
    title: "일요일의 티타임",
    subtitle: "차 한잔의 여유",
    author: "by 티소믈리에",
    image: "/path/to/tea.jpg",
    category: "latest",
    day: "일",
  },
];
