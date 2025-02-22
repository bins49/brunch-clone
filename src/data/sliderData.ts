export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  description?: string;
  image: string;
  memberCount?: string;
  link: string;
}

export const sliderData: SlideItem[] = [
  {
    id: 1,
    title: "희극 투어",
    subtitle: "다분야 예술가와 한 사람의 선진 아트, 사운드 아트, 회화",
    author: "by 마틸다 하나비",
    description: "조각 등 북넘은 예술 세계를 구현해 냅니다. 어떤 형태...",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7FJh/image/6cB0sjq_Ilh8JXiOKzk1sjZFd0g.jpg",
    memberCount: "1명이 응원",
    link: "https://brunch.co.kr/@matilda/123",
  },
  {
    id: 2,
    title: "주목받고 있는 웅원 인기글을",
    subtitle: "소개합니다",
    author: "by 시안",
    description: "아, 왜 내가 눈물이 나지?(현재 완결)",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2xMY/image/XNTz_qxo2rqZ8g1LmHr1T8JzmE0.jpg",
    link: "https://brunch.co.kr/@cyan/456",
  },
  {
    id: 3,
    title: "일상의 예술",
    subtitle: "매일의 순간을 특별하게 만드는 방법",
    author: "by 예술가 김민지",
    description: "우리의 일상 속에서 발견하는 작은 예술들...",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/abcd/image/daily-art.jpg",
    memberCount: "42명이 응원",
    link: "https://brunch.co.kr/@minji/789",
  },
  {
    id: 4,
    title: "여행과 글쓰기",
    subtitle: "세계를 걸으며 써내려간 이야기",
    author: "by 여행작가 이하늘",
    description: "발걸음마다 새로운 영감을 만나다",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/efgh/image/travel-write.jpg",
    link: "https://brunch.co.kr/@sky/101",
  },
  {
    id: 5,
    title: "커피와 일상",
    subtitle: "향긋한 커피 한 잔과 함께하는 아침",
    author: "by 커피러버",
    description: "매일 아침 나만의 커피 루틴으로 시작하는 하루...",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1234/image/coffee-morning.jpg",
    memberCount: "89명이 응원",
    link: "https://brunch.co.kr/@coffee/123",
  },
  {
    id: 6,
    title: "도시의 밤",
    subtitle: "네온사인 아래의 이야기",
    author: "by 야행성",
    description: "밤이 깊어질수록 더욱 선명해지는 도시의 색채",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5678/image/night-city.jpg",
    link: "https://brunch.co.kr/@night/456",
  },
  {
    id: 7,
    title: "식물과 사람",
    subtitle: "반려식물과 함께 성장하는 이야기",
    author: "by 식물집사",
    description: "작은 새싹부터 시작된 우리의 동행",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/9012/image/plants-life.jpg",
    memberCount: "127명이 응원",
    link: "https://brunch.co.kr/@plants/789",
  },
  {
    id: 8,
    title: "책상 위 풍경",
    subtitle: "미니멀한 작업 공간 꾸미기",
    author: "by 공간기록자",
    description: "나만의 아늑한 창작 공간을 만드는 방법",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3456/image/desk-space.jpg",
    link: "https://brunch.co.kr/@space/101",
  },
  {
    id: 9,
    title: "영화관 옆 서점",
    subtitle: "시네필의 책장",
    author: "by 무비북",
    description: "영화와 문학의 경계를 넘나드는 이야기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7890/image/movie-books.jpg",
    memberCount: "94명이 응원",
    link: "https://brunch.co.kr/@moviebook/234",
  },
  {
    id: 10,
    title: "주말 베이킹",
    subtitle: "달콤한 휴식의 시간",
    author: "by 홈베이커",
    description: "오븐에서 피어나는 행복한 향기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2345/image/weekend-baking.jpg",
    link: "https://brunch.co.kr/@baker/567",
  },
  {
    id: 11,
    title: "음악과 기억",
    subtitle: "플레이리스트에 담긴 순간들",
    author: "by 멜로디",
    description: "각각의 노래에 새겨진 특별한 추억",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6789/image/music-memories.jpg",
    memberCount: "203명이 응원",
    link: "https://brunch.co.kr/@melody/890",
  },
  {
    id: 12,
    title: "서울 골목 산책",
    subtitle: "도시의 숨은 이야기",
    author: "by 도시탐험가",
    description: "오래된 동네의 새로운 발견",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/0123/image/seoul-streets.jpg",
    link: "https://brunch.co.kr/@explorer/345",
  },
  {
    id: 13,
    title: "그림일기",
    subtitle: "일상을 스케치하다",
    author: "by 드로잉메이커",
    description: "펜 끝으로 기록하는 소소한 하루",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/4567/image/daily-drawing.jpg",
    memberCount: "167명이 응원",
    link: "https://brunch.co.kr/@drawing/678",
  },
  {
    id: 14,
    title: "계절의 맛",
    subtitle: "제철 식재료로 만드는 한 끼",
    author: "by 식탁일기",
    description: "자연이 선물한 최고의 맛",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/8901/image/seasonal-food.jpg",
    memberCount: "145명이 응원",
    link: "https://brunch.co.kr/@food/234",
  },
  {
    id: 20,
    title: "마지막 페이지",
    subtitle: "끝이 아닌 새로운 시작",
    author: "by 작가 홍길동",
    description: "우리의 이야기는 계속됩니다...",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/wxyz/image/final-page.jpg",
    memberCount: "156명이 응원",
    link: "https://brunch.co.kr/@hong/999",
  },
  {
    id: 15,
    title: "디지털 노마드의 삶",
    subtitle: "세계를 무대로 일하는 사람들",
    author: "by 노마드워커",
    description: "장소에 얽매이지 않는 새로운 라이프스타일",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/nomad/image/digital-nomad.jpg",
    memberCount: "234명이 응원",
    link: "https://brunch.co.kr/@nomad/567",
  },
  {
    id: 16,
    title: "미니멀 라이프",
    subtitle: "비움으로 채우는 일상",
    author: "by 심플리스트",
    description: "물건을 줄이며 찾아온 마음의 여유",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/minimal/image/simple-life.jpg",
    link: "https://brunch.co.kr/@minimalist/789",
  },
  {
    id: 17,
    title: "독립출판 이야기",
    subtitle: "나만의 책 만들기",
    author: "by 북메이커",
    description: "아이디어에서 책이 되기까지",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/book/image/indie-publish.jpg",
    memberCount: "178명이 응원",
    link: "https://brunch.co.kr/@bookmaker/234",
  },
  {
    id: 18,
    title: "도시 정원사",
    subtitle: "베란다의 작은 정원",
    author: "by 식물사",
    description: "콘크리트 숲에서 피어나는 초록빛 생명",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/garden/image/urban-garden.jpg",
    link: "https://brunch.co.kr/@gardener/456",
  },
  {
    id: 19,
    title: "영화 속 그 장면",
    subtitle: "시네마 스토리텔링",
    author: "by 씬디렉터",
    description: "명장면 속에 숨겨진 이야기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cinema/image/movie-scene.jpg",
    memberCount: "312명이 응원",
    link: "https://brunch.co.kr/@cinema/678",
  },
  {
    id: 21,
    title: "아날로그 감성",
    subtitle: "필름카메라의 매력",
    author: "by 포토그래퍼 김철",
    description: "디지털에서 느낄 수 없는 특별한 순간",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/photo/image/film-camera.jpg",
    memberCount: "156명이 응원",
    link: "https://brunch.co.kr/@photographer/890",
  },
  {
    id: 22,
    title: "제로웨이스트 생활",
    subtitle: "지구를 위한 작은 실천",
    author: "by 에코라이프",
    description: "쓰레기 없는 삶을 향한 여정",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eco/image/zero-waste.jpg",
    link: "https://brunch.co.kr/@ecolife/123",
  },
  {
    id: 23,
    title: "스트리트 푸드",
    subtitle: "길거리 음식의 세계",
    author: "by 푸드헌터",
    description: "도시의 맛을 찾아서",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/food/image/street-food.jpg",
    memberCount: "245명이 응원",
    link: "https://brunch.co.kr/@foodhunter/456",
  },
  {
    id: 24,
    title: "독립영화 제작기",
    subtitle: "작은 영화의 큰 꿈",
    author: "by 인디필름",
    description: "한정된 예산으로 만드는 무한한 상상",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/indie/image/indie-film.jpg",
    link: "https://brunch.co.kr/@indiefilm/789",
  },
  {
    id: 25,
    title: "도시 건축 이야기",
    subtitle: "건물 속 숨은 역사",
    author: "by 건축탐험가",
    description: "시간이 쌓여 만들어진 도시의 풍경",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/arch/image/city-architecture.jpg",
    memberCount: "198명이 응원",
    link: "https://brunch.co.kr/@architect/234",
  },
  {
    id: 26,
    title: "현대 미술의 시선",
    subtitle: "갤러리에서 만난 오늘",
    author: "by 아트큐레이터",
    description: "현대 미술이 들려주는 우리 시대의 이야기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/art/image/modern-art.jpg",
    memberCount: "267명이 응원",
    link: "https://brunch.co.kr/@curator/345",
  },
  {
    id: 27,
    title: "도시의 작은 서점",
    subtitle: "책과 함께하는 오후",
    author: "by 북로드",
    description: "동네 서점에서 발견한 보물 같은 책들",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/book/image/local-bookstore.jpg",
    link: "https://brunch.co.kr/@bookroad/567",
  },
  {
    id: 48,
    title: "일상의 스케치",
    subtitle: "연필로 그리는 하루",
    author: "by 스케처",
    description: "소소한 일상을 그림으로 담아내다",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/sketch/image/daily-drawing.jpg",
    memberCount: "142명이 응원",
    link: "https://brunch.co.kr/@sketcher/789",
  },
  {
    id: 49,
    title: "도시 야경 산책",
    subtitle: "밤이 들려주는 이야기",
    author: "by 나이트워커",
    description: "불빛 아래 숨겨진 도시의 비밀",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/night/image/city-night.jpg",
    link: "https://brunch.co.kr/@nightwalker/234",
  },
  {
    id: 50,
    title: "마지막 페이지",
    subtitle: "새로운 시작을 위한 끝",
    author: "by 스토리텔러",
    description: "끝은 또 다른 시작의 문",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/story/image/last-page.jpg",
    memberCount: "189명이 응원",
    link: "https://brunch.co.kr/@storyteller/999",
  },
  {
    id: 28,
    title: "요가와 명상",
    subtitle: "일상 속 작은 쉼표",
    author: "by 마음챙김",
    description: "바쁜 일상 속 나를 위한 시간",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/yoga/image/meditation.jpg",
    memberCount: "156명이 응원",
    link: "https://brunch.co.kr/@mindful/123",
  },
  {
    id: 29,
    title: "도시농부의 텃밭",
    subtitle: "콘크리트 숲의 초록 생활",
    author: "by 어반파머",
    description: "작은 공간에서 시작하는 도시농업",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/farm/image/urban-farming.jpg",
    link: "https://brunch.co.kr/@urbanfarmer/456",
  },
  {
    id: 30,
    title: "수제맥주 여행",
    subtitle: "로컬 브루어리 탐방",
    author: "by 비어헌터",
    description: "전국 각지의 특별한 맥주를 찾아서",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/beer/image/craft-beer.jpg",
    memberCount: "234명이 응원",
    link: "https://brunch.co.kr/@beerhunter/789",
  },
  {
    id: 31,
    title: "반려견과의 하루",
    subtitle: "함께 성장하는 이야기",
    author: "by 도그워커",
    description: "네 발로 걷는 행복을 배우다",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/dog/image/dog-life.jpg",
    link: "https://brunch.co.kr/@dogwalker/234",
  },
  {
    id: 32,
    title: "도예의 세계",
    subtitle: "흙으로 빚는 예술",
    author: "by 도예가",
    description: "손끝으로 전하는 온기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/pottery/image/ceramic-art.jpg",
    memberCount: "178명이 응원",
    link: "https://brunch.co.kr/@potter/567",
  },
  {
    id: 33,
    title: "재즈 카페",
    subtitle: "음악이 흐르는 공간",
    author: "by 재즈러버",
    description: "한 잔의 커피와 함께하는 재즈 여행",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/jazz/image/jazz-cafe.jpg",
    link: "https://brunch.co.kr/@jazzlover/890",
  },
  {
    id: 34,
    title: "빈티지 가구 이야기",
    subtitle: "오래된 것의 매력",
    author: "by 빈티지헌터",
    description: "시간이 만든 아름다움",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/vintage/image/vintage-furniture.jpg",
    memberCount: "145명이 응원",
    link: "https://brunch.co.kr/@vintage/123",
  },
  {
    id: 35,
    title: "향수 컬렉터",
    subtitle: "향으로 기억하는 순간",
    author: "by 퍼퓸러버",
    description: "내 삶에 어울리는 향을 찾아서",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/perfume/image/perfume-collection.jpg",
    link: "https://brunch.co.kr/@perfume/456",
  },
  {
    id: 36,
    title: "도시의 옥상정원",
    subtitle: "하늘과 가까운 휴식",
    author: "by 루프가드너",
    description: "빌딩 숲 위의 작은 오아시스",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/roof/image/rooftop-garden.jpg",
    memberCount: "267명이 응원",
    link: "https://brunch.co.kr/@roofgarden/789",
  },
  {
    id: 37,
    title: "캘리그라피 일기",
    subtitle: "글씨로 그리는 감정",
    author: "by 캘리그라퍼",
    description: "붓과 펜으로 표현하는 마음",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/calli/image/calligraphy.jpg",
    link: "https://brunch.co.kr/@calligrapher/234",
  },
  {
    id: 38,
    title: "모던 한식의 재해석",
    subtitle: "전통과 현대의 만남",
    author: "by 한식셰프",
    description: "우리 음식의 새로운 변신",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/chef/image/modern-hansik.jpg",
    memberCount: "312명이 응원",
    link: "https://brunch.co.kr/@chef/567",
  },
  {
    id: 39,
    title: "서울의 골목길",
    subtitle: "도시의 숨은 이야기",
    author: "by 도시산책러",
    description: "골목마다 담긴 삶의 흔적",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/alley/image/seoul-alley.jpg",
    link: "https://brunch.co.kr/@citywalk/890",
  },
  {
    id: 40,
    title: "DIY 가구 제작",
    subtitle: "손으로 만드는 집",
    author: "by 우드워커",
    description: "나만의 가구 만들기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/wood/image/diy-furniture.jpg",
    memberCount: "198명이 응원",
    link: "https://brunch.co.kr/@woodworker/123",
  },
  {
    id: 41,
    title: "클래식 음악 산책",
    subtitle: "일상의 BGM",
    author: "by 클래식러버",
    description: "현대인을 위한 클래식 가이드",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/classic/image/classical-music.jpg",
    link: "https://brunch.co.kr/@classic/456",
  },
  {
    id: 42,
    title: "도시의 숨은 카페",
    subtitle: "커피로 연결된 공간",
    author: "by 카페헌터",
    description: "특별한 커피와 공간을 찾아서",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cafe/image/hidden-cafe.jpg",
    memberCount: "245명이 응원",
    link: "https://brunch.co.kr/@cafehunter/789",
  },
  {
    id: 43,
    title: "패션 스케치북",
    subtitle: "일상을 입는 방법",
    author: "by 스타일리스트",
    description: "옷장에서 시작하는 변화",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/fashion/image/fashion-sketch.jpg",
    link: "https://brunch.co.kr/@stylist/234",
  },
  {
    id: 44,
    title: "도시 생태 탐험",
    subtitle: "콘크리트 속 자연",
    author: "by 생태탐험가",
    description: "도시에서 발견하는 생명의 흔적",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eco/image/urban-nature.jpg",
    memberCount: "167명이 응원",
    link: "https://brunch.co.kr/@ecologist/567",
  },
  {
    id: 45,
    title: "전통주 여행",
    subtitle: "우리 술의 매력",
    author: "by 술담화",
    description: "전통주에 담긴 이야기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/sool/image/traditional-liquor.jpg",
    link: "https://brunch.co.kr/@sooldamhwa/890",
  },
  {
    id: 46,
    title: "도시의 벽화",
    subtitle: "거리의 예술",
    author: "by 스트릿아티스트",
    description: "회색 벽을 캔버스로",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/mural/image/street-art.jpg",
    memberCount: "203명이 응원",
    link: "https://brunch.co.kr/@streetart/123",
  },
  {
    id: 47,
    title: "미니멀 주방",
    subtitle: "심플한 요리의 시작",
    author: "by 키친디자이너",
    description: "효율적인 주방 공간 만들기",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/kitchen/image/minimal-kitchen.jpg",
    link: "https://brunch.co.kr/@kitchen/456",
  },
];
