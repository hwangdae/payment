
export interface DisCountType {
    id: string;
    label: string;
    disCount: number;
    disCountType: string | undefined;
}


export const totalPay = (disCount:DisCountType | undefined,price:number,point:number) => {
    if (disCount === undefined && point === 0) {
      return price - 2500;
    }
    if (disCount === undefined || disCount.disCountType === undefined) {
      return price - point;
    } else if (point === undefined) {
      // 쿠폰만 정의된 경우
      if (disCount.disCountType === "won") {
        return price - disCount?.disCount;
      } else if (disCount.disCountType === "percent") {
        return price - (price * disCount?.disCount) / 100;
      }
    }
    // 할인과 포인트가 모두 정의된 경우
    if (disCount.disCountType === "won") {
      return price - point - disCount?.disCount;
    } else if (disCount.disCountType === "percent") {
      return price - price / disCount?.disCount - point;
    }
  };