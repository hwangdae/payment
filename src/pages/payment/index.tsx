"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import shortid from "shortid";
import {
  loadPaymentWidget,
  ANONYMOUS,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProductInfomation from "@/components/payment/ProductInfomation";
import { useRouter } from "next/router";
import { coupons } from "@/mockupData/Coupon";
import { registerSchema } from "@/valitators/delivery";
import { MerchandiseType } from "@/types/mockupData";
import { useRecoilValue } from "recoil";
import { merchandisesState } from "@/Recoil/recoilState";
import { useToast } from "@/components/ui/use-toast";

//  process.env.NEXT_PUBLIC_CLIENT_KEY
const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = shortid.generate();

const Payment = () => {
  const [paymentWidget, setPaymentWidget] = useState<any>(null);
  const paymentMethodsWidgetRef = useRef<any>(null);
  const items = useRecoilValue(merchandisesState)
  const [userPoint,setUserPoint] = useState(5000)
  const { toast } = useToast()

  const router = useRouter()

  console.log(items)

  const price = items.map((item:MerchandiseType)=>{
    return item.price
  }).reduce((acc:number,curr:number)=>{
    return  acc + curr
  },0)

  useEffect(()=>{
    if(items.length <=0){
      router.push('/')
    }
  },[])

  useLayoutEffect(() => {
    const fetchPaymentWidget = async () => {
      try {
        const loadedWidget = await loadPaymentWidget(
          widgetClientKey,
          customerKey
        );
        setPaymentWidget(loadedWidget);
      } catch (error) {
        console.error("Error fetching payment widget:", error);
      }
    };

    fetchPaymentWidget();
  }, []);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: price },
      { variantKey: "DEFAULT" }
    );

    paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" }); //약관 동의 부분

    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }, [paymentWidget, price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      recipient: "",
      orderPhone: "",
      landLinePhone: "",
      address: "",
      detailedAddress: "",
      coupon: "",
      point: "",
    },
  });
  let point = Number(form.getValues().point);
  let point2 = Number(form.watch().point)
  // console.log(point)
  console.log(point2)
  console.log(form.setValue)
  if(point2 > userPoint){
    return toast({
      description:"보유하신 포인트를 초과했습니다."
    })
  }
  const disCount = coupons.find((coupon) => {
    return form.getValues().coupon === coupon.id;
  });

  const totalPay = () => {
    if (disCount === undefined && point === 0) {
      return price - 2500;
    }
    if (disCount === undefined || disCount.disCountType === undefined) {
      return price - point;
    } else if (point === undefined) {
      // 쿠폰만 정의된 경우
      if (disCount.disCountType === "won") {
        return price - disCount.disCount;
      } else if (disCount.disCountType === "percent") {
        return price - (price * disCount.disCount) / 100;
      }
    }
    // 할인과 포인트가 모두 정의된 경우
    if (disCount.disCountType === "won") {
      return price - point - disCount.disCount;
    } else if (disCount.disCountType === "percent") {
      return price - price / disCount.disCount - point;
    }
  };

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const { name, email, phone } = values;

    try {
      await paymentWidget?.requestPayment({
        orderId: shortid.generate(),
        orderName: "토스 티셔츠 외 2건",
        customerName: name,
        customerEmail: email,
        customerMobilePhone: phone,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="m-5 border border-solid px-5">
      <header className="border-b-2 mb-5">
        <h1 className="text-4xl font-[700] py-5">Order/Payment</h1>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("flex justify-between gap-5")}
        >
          <div className="w-[70%]">
            <ProductInfomation items={items}/>
            <section>
              <h2>주문자 정보</h2>
              <div className="border p-5 my-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해 주세요." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="이메일을 입력해 주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>휴대폰</FormLabel>
                      <FormControl>
                        <Input placeholder="01012345678(- 제외)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2>배송 정보</h2>
              <div className="border p-5 my-5">
                <FormField
                  control={form.control}
                  name="recipient"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="수령인" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>휴대폰</FormLabel>
                      <FormControl>
                        <Input placeholder="01012345678(- 제외)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="landLinePhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="01012345678(- 제외)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>배송지 주소</FormLabel>
                      <FormControl>
                        <Input placeholder="주소" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="detailedAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input placeholder="상세 주소" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2>쿠폰/포인트</h2>
              <div className="border p-5 my-5">
                <FormField
                  control={form.control}
                  name="coupon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>쿠폰 할인</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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
                <FormField
                  control={form.control}
                  name="point"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>적립금 사용</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /><span>보유 적립금 : {userPoint}원</span>
              </div>
            </section>
          </div>
          <aside className="w-[30%]">
            <section className="mb-5">
              <h2>최종 결제금액</h2>
              <div className="mt-5 border p-5">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">상품 가격</TableCell>
                      <TableCell className="text-right">{price.toLocaleString()}원</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">쿠폰 할인</TableCell>
                      <TableCell className="text-right">
                        {disCount === undefined ||
                        disCount.disCountType === undefined ? (
                          "쿠폰 적용 안함"
                        ) : (
                          <p>
                            {disCount?.disCount}
                            {disCount?.disCountType === "won" ? "원" : "%"}
                          </p>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">적립금 사용</TableCell>
                      <TableCell className="text-right">
                        {point === 0 ? "적립금 사용 안함" : `${point}원`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">배송비</TableCell>
                      <TableCell className="text-right">2500원</TableCell>
                    </TableRow>
                    <TableRow className={cn("bg-slate-100")}>
                      <TableCell className="font-medium">총 결제금액</TableCell>
                      <TableCell className="text-right font-bold text-blue-500">
                        {totalPay()?.toLocaleString()}원
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="bg-slate-200 p-3">
                <p>
                  <span className="text-blue-500 font-bold">160</span>
                  포인트 적립 예정
                </p>
              </div>
            </section>
            <section>
              <div className="border mb-5">
                <div id="payment-widget" />
                <div id="agreement" />
              </div>
            </section>
            <Button className={cn("w-[100%] bg-blue-500 py-6")} type="submit">
              결제하기
            </Button>
          </aside>
        </form>
      </Form>
    </div>
  );
};

export default Payment;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
