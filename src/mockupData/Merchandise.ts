import shortid from "shortid";

interface MerchandiseType {
  id: string;
  category: string;
  name: string;
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
    maker: "소버먼트",
    description: "CSM Raglan T-SHIRT Light Grey",
    quantity: 1,
    price: 40700,
  },
  {
    id: shortid.generate(),
    category: "top",
    image: "CLUBTshirt.jpg",
    maker: "엘리메노",
    description: "CLUB 티셔츠",
    quantity: 1,
    price: 21900,
  },
  {
    id: shortid.generate(),
    category: "bottom",
    image: "codegraphy.jpg",
    maker: "디스펑트",
    description: "코드그라피 팬츠",
    quantity: 1,
    price: 32000,
  },
  {
    id: shortid.generate(),
    category: "bottom",
    image: "LAFUDGE.jpg",
    maker: "트래블",
    description: "라퍼지 팬츠",
    quantity: 1,
    price: 39900,
  },
  {
    id: shortid.generate(),
    category: "bottom",
    image: "PERSTEP.jpg",
    maker: "후브스",
    description: "퍼스텝 팬츠",
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
