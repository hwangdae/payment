"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/valitators/delivery";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { coupons } from "@/mockupData/Coupon";
import { RegisterInput } from "@/types/register";
import shortid from "shortid";
import {
  loadPaymentWidget,
  ANONYMOUS,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import ProductInfomation from "@/components/payment/ProductInfomation";

const widgetClientKey = "test_ck_LlDJaYngrooz1ZAyzm0nrezGdRpX";
const customerKey = shortid.generate();

const payItems = [
  { id: "토스페이", label: "토스페이" },
  { id: "핸드폰 결제", label: "핸드폰 결제" },
  { id: "카카오페이", label: "카카오페이" },
  { id: "신용카드", label: "신용카드" },
  { id: "무통장 입금", label: "무통장 입금" },
];

const Home = () => {
  const [paymentWidget, setPaymentWidget] = useState<any>(null);
  const paymentMethodsWidgetRef = useRef<any>(null);
  const [price, setPrice] = useState<any>(22900);

  // useEffect(() => {
  //   const fetchPaymentWidget = async () => {
  //     try {
  //       const loadedWidget = await loadPaymentWidget(
  //         widgetClientKey,
  //         customerKey
  //       );
  //       setPaymentWidget(loadedWidget);
  //     } catch (error) {
  //       console.error("Error fetching payment widget:", error);
  //     }
  //   };

  //   fetchPaymentWidget();
  // }, []);

  // useEffect(() => {
  //   if (paymentWidget == null) {
  //     return;
  //   }

  //   const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
  //     "#payment-widget",
  //     { value: price },
  //     { variantKey: "DEFAULT" }
  //   );

  //   paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" }); //약관 동의 부분

  //   paymentMethodsWidgetRef.current = paymentMethodsWidget;
  // }, [paymentWidget, price]);

  // useEffect(() => {
  //   const paymentMethodsWidget = paymentMethodsWidgetRef.current;

  //   if (paymentMethodsWidget == null) {
  //     return;
  //   }

  //   paymentMethodsWidget.updateAmount(price);
  // }, [price]);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
      deliveryName:"",
      orderPhone:"",
      landLinePhone:"",
      address:"",
      detailedAddress:"",
      coupon:"",
      point: "",
    },
  });
  let point = Number(form.watch().point)

  const disCount = coupons.find((coupon) => {
    return form.watch().coupon === coupon.id;
  });

  const disCount2 = useMemo(()=>{
    return coupons.find((coupon) => {
      return form.watch().coupon === coupon.id;
    });
  },[coupons])
  console.log("해당쿠폰", disCount);
  console.log("해당쿠폰2", disCount2);

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

  console.log(form.watch());
  console.log(form.getValues());

  const onSubmit = (data: RegisterInput) => {
    alert("a");
    console.log(data);
    // try {
    //   await paymentWidget?.requestPayment({
    //     orderId: shortid.generate(),
    //     orderName: "토스 티셔츠 외 2건",
    //     customerName: "김토스",
    //     customerEmail: "customer123@gmail.com",
    //     customerMobilePhone: "01012341234",
    //     successUrl: `${window.location.origin}/success`,
    //     failUrl: `${window.location.origin}/fail`,
    //   });
    // } catch (error) {
    //   // 에러 처리하기
    //   console.error(error);
    // }
  };

  return (
    <div>
      <div className="m-5 border border-solid px-5">
        <header className="border-b-2 mb-5">
          <h1 className="text-4xl font-[700] py-5">Order/Payment</h1>
        </header>
        <main>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn("flex justify-between gap-5")}
            >
              <div className="w-[70%]">
                <ProductInfomation />
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
                            <Input
                              placeholder="이름을 입력해 주세요."
                              {...field}
                            />
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
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
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
                      name="deliveryName"
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
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
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
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
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
                    />
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
                          <TableCell className="font-medium">
                            상품 가격
                          </TableCell>
                          <TableCell className="text-right">
                            {price}원
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            쿠폰 할인
                          </TableCell>
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
                          <TableCell className="font-medium">
                            적립금 사용
                          </TableCell>
                          <TableCell className="text-right">
                            {point === 0 ? "적립금 사용 안함" : `${point}원`}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">배송비</TableCell>
                          <TableCell className="text-right">2500원</TableCell>
                        </TableRow>
                        <TableRow className={cn("bg-slate-100")}>
                          <TableCell className="font-medium">
                            총 결제금액
                          </TableCell>
                          <TableCell className="text-right font-bold text-blue-500">
                            {totalPay()}원
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
                  <div className="border">
                    <div id="payment-widget" />
                    <div id="agreement" />
                  </div>
                </section>

              </aside>
              <Button type="submit" className={cn("w-[100%]")}>
                  결제하기
                </Button>
            </form>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default Home;
