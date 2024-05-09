import shortid from "shortid";

export interface MerchandiseType {
  id: string;
  category: string;
  image:string;
  maker:string;
  description:string;
  quantity: number;
  price: number;
}

export const MERCHANDISES = [
  {
    id: shortid.generate(),
    category: "top",
    image: "BIGTshirt.jpg",
    maker: "소버먼트",
    description: "빅 트위치 로고 티셔츠 화이트",
    quantity: 1,
    price: 22900,
  },
  {
    id: shortid.generate(),
    category: "top",
    image: "CSMTshirt.jpg",
    maker: "CSM",
    description: "CSM Raglan T-SHIRT Light Grey",
    quantity: 1,
    price: 40700,
  },
  {
    id: shortid.generate(),
    category: "top",
    image: "pigment.jpg",
    maker: "디스펑트",
    description: "DREAM CATCHER PIGMENT T-SHIRT (CHARCOAL)",
    quantity: 1,
    price: 39000,
  },
  {
    id: shortid.generate(),
    category: "top",
    image: "CLUBTshirt.jpg",
    maker: "엘리메노",
    description: "EL 스트리트 아트워크 오버핏 반팔티",
    quantity: 1,
    price: 21900,
  },
  {
    id: shortid.generate(),
    category: "pants",
    image: "codegraphy.jpg",
    maker: "디스펑트",
    description: "미니멀 트레이닝 essential 원턱 반바지",
    quantity: 1,
    price: 32000,
  },
  {
    id: shortid.generate(),
    category: "pantspants",
    image: "LAFUDGE.jpg",
    maker: "트래블",
    description: "카펜터 버뮤다 스웨트 8부 팬츠 블랙",
    quantity: 1,
    price: 39900,
  },
  {
    id: shortid.generate(),
    category: "pants",
    image: "PERSTEP.jpg",
    maker: "후브스",
    description: "딥워싱 원턱 데님 하프팬츠 다크블루",
    quantity: 1,
    price: 15400,
  },
  {
    id: shortid.generate(),
    category: "outer",
    image: "packable.jpg",
    maker: "키뮤어",
    description: "패커블 시어 후드 윈드브레이커_라이트 그레이",
    quantity: 1,
    price: 79000,
  },
  {
    id: shortid.generate(),
    category: "outer",
    image: "RELAX.jpg",
    maker: "예일",
    description: "LIGHT RELAX FIT BLOUSON IVORY",
    quantity: 1,
    price: 39000,
  },
  {
    id: shortid.generate(),
    category: "outer",
    image: "zipupjacket.jpg",
    maker: "플레이스 스튜디오",
    description: "오버사이즈 유틸리티 코튼 블루종 집업 자켓 [블랙]    ",
    quantity: 1,
    price: 99000,
  },
];
