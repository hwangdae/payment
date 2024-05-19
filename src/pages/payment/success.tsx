import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";

// ------ Payment 객체 ------
// @docs https://docs.tosspayments.com/reference#payment-객체
interface Payment {
  orderName: string;
  approvedAt: string;
  receipt: {
    url: string;
  };
  totalAmount: number;
  method: "카드" | "가상계좌" | "계좌이체";
  paymentKey: string;
  orderId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { paymentKey, orderId, amount },
  } = context;

  try {
    // ------  결제 승인 ------
    // @docs https://docs.tosspayments.com/guides/payment-widget/integration#3-결제-승인하기
    const { data: payment } = await axios.post<Payment>(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        paymentKey,
        orderId,
        amount,
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.TOSS_PAYMENTS_SECRET_KEY}:`
          ).toString("base64")}`,
        },
      }
    );
    console.log(payment);
    return {
      props: { payment },
    };
  } catch (err: any) {
    console.error("err", err.response.data);

    return {
      redirect: {
        destination: `/fail?code=${
          err.response.data.code
        }&message=${encodeURIComponent(err.response.data.message)}`,
        permanent: false,
      },
    };
  }
};

interface Props {
  payment: Payment;
}

export default function SuccessPage({ payment }: Props) {
  const router = useRouter();
  return (
    <main>
      <div className="mx-auto border shadow-sm p-5 rounded-md mt-[6%]" style={{ width: "600px" }}>
        <div className="flex flex-col items-center">
          <Image
            width={100}
            src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
            alt="결제 완료 체크 이미지"
          />
          <h2 className="text-2xl">결제를 완료했어요</h2>
        </div>
        <div className="my-5 p-7 border rounded-md">
          <div className="p-grid typography--p" style={{ marginTop: "0px" }}>
            <div className="p-grid-col text--left">
              <b>주문번호</b>
            </div>
            <span className="p-grid-col text--right" id="orderId">
              {payment.orderId}
            </span>
          </div>
          <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
            <div className="p-grid-col text--left">
              <b>결제금액</b>
            </div>
            <div className="p-grid-col text--right" id="amount">
              {payment.totalAmount.toLocaleString()}원
            </div>
          </div>
          <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
            <div className="p-grid-col text--left">
              <b>주문정보</b>
            </div>
            <div className="p-grid-col text--right" id="orderId">
              {payment.orderName}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => router.push("/")}>
            메인페이지로 이동하기
          </Button>
        </div>
        {/* <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
          <div className="p-grid-col text--left">
            <b>paymentKey</b>
          </div>
          <div className="p-grid-col text--right" id="paymentKey" style={{ whiteSpace: "initial", width: "250px" }}>
            {payment.paymentKey}
          </div>
        </div> */}
        {/* <div className="p-grid-col">
          <Link href="https://docs.tosspayments.com/guides/payment-widget/integration">
            <button className="button p-grid-col5">연동 문서</button>
          </Link>
          <Link href="https://discord.gg/A4fRFXQhRu">
            <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
              실시간 문의
            </button>
          </Link>
        </div> */}
      </div>
      {/* <div
        className="box_section"
        style={{ width: "600px", textAlign: "left" }}
      >
        <b>Response Data :</b>
        <div id="response" style={{ whiteSpace: "initial" }}>
          {payment && <pre>{JSON.stringify(payment, null, 4)}</pre>}
        </div>
      </div> */}
    </main>
  );
}
