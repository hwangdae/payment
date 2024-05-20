# DevCamp - Pront Project

토스 페이먼츠를 통한 결제를 구현하고, 쿠폰 및 포인트 이벤트 기능을 추가한 결제 프로젝트

## Tech Stack

1. React
2. TypeScript
3. React-hook-form
4. zod
5. Recoil

## Site Url

URL : http://closetPayment.vercel.app

## 핵심 기능

1. 토스 페이먼츠 연동<br/>
   토스 페이먼츠 API를 사용하여 결제 기능을 구현합니다.
2. 쿠폰 기능 추가<br/>
   사용자가 쿠폰을 입력하고 할인을 받을 수 있는 기능을 추가합니다.
3. 포인트 기능 추가<br/>
   사용자가 보유한 포인트를 사용하여 결제할 수 있는 기능을 추가합니다.

## 프로젝트 구조

`@/components/ui` : 이 디렉토리에는 카드, 버튼, 양식 및 기타 관련 UI 구성 요소가 포함되어 있습니다.<br>
`@/lib` `cn` : (className) 함수와 같은 유틸리티 함수가 저장되는 곳입니다.<br>
`@/validators` :이 디렉토리에는 인증(auth) 및 선택 옵션을 위한 유효성 검사 스키마가 있습니다.

## 목업 데이터

`@/mockupData/Merchandise` : 구매하고자 하는 상품 목업 데이터가 있습니다.

```js
export const MERCHANDISES = [
  {
    id: "hX2BTPkNH",
    category: "top",
    image: "/images/BIGTshirt.jpg",
    maker: "소버먼트",
    description: "BIG 트위치 로고 티셔츠 White",
    size: "",
    quantity: 1,
    price: 22900,
  },
  // ... other data
];
```

`@/mockupData/Coupon` : 사용할 수 있는 쿠폰 목업 데이터가 정의되어 있습니다.

```js
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
  // ... other coupons
];
```

## Local Fonts

`@/fonts` : Pretendard 폰트의 woff2 파일이 있습니다.

```js
import localFont from "next/font/local";

const Pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "nomal",
    },
    //...fonts of different sizes
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={Pretendard.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

## 상품 장바구니 역할

`@/components/detailMerchandise/SelectForm` : 상품의 사이즈 선택 및 장바구니 역할을 데이터베이스가 아닌 `useState`를 사용하여 내부적으로 구현 하였습니다.

```js
const SelectForm = ({ merchandise }: MerchandiseProps) => {
  const [items, setItems] = useState < any > [];

  const addItemList = (value: string) => {
    if (items.find((item: MerchandiseType) => item.size === value)) {
      return;
    }
    const itemToAdd = {
      ...merchandise,
      id: shortid.generate(),
      size: value,
    };

    setItems([...items, itemToAdd]);
  };
};
```

## 포인트 및 쿠폰 적용

비회원가입 개발로 유저가 몇개의 쿠폰과 얼마의 포인트가 있다는 가정하에 개발을 진행 하였습니다.

```js
const Payment = () => {
  const [point, setPoint] = useState < number > 0;
  const userPoint = 5000;

  return (
    <FormField
      control={form.control}
      name="coupon"
      render={({ field }) => (
        <FormItem>
          <FormLabel>쿠폰 할인</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="쿠폰 선택" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {coupons.map((coupon) => {
                return (
                  <SelectItem key={coupon.id} value={coupon.id}>
                    {coupon.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
    <div className="flex items-center justify-between mt-2">
      <label htmlFor="point" className="text-[14px] font-medium">적립금 사용</label>
      <input
        className="flex h-10 w-[90%] ..."
        id="point"
        name="point"
        value={point}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
          // ... 사용할 포인트가 적립금을 초과시 실행되는 로직
          }
      />
      <p className="text-[14px]">
        보유 적립금
        <span className="text-orange-500 font-bold">
          {userPoint.toLocaleString()}
        </span>
        원
      </p>
    </div>
  );
};
```
