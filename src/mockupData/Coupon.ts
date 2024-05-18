import shortid from "shortid";

export const coupons = [
  {
    id: shortid.generate(),
    label: "쿠폰 적용 안함",
    disCount: 0,
    disCountType: undefined,
  },
  {
    id: shortid.generate(),
    label: "천원 할인 쿠폰",
    disCount: 1000,
    disCountType: "won",
  },
  {
    id: shortid.generate(),
    label: "10% 할인 쿠폰",
    disCount: 10,
    disCountType: "percent",
  },
  {
    id: shortid.generate(),
    label: "오천원 할인 쿠폰",
    disCount: 5000,
    disCountType: "won",
  },
  {
    id: shortid.generate(),
    label: "5% 할인 쿠폰",
    disCount: 5,
    disCountType: "percent",
  },
];
