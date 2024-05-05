// import React from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { RegisterInput } from "@/types/register";
// import { registerSchema } from "@/valitators/delivery";

// const DeliveryInfomation = () => {
//   const form = useForm<RegisterInput>({
//     resolver: zodResolver(registerSchema),
//     defaultValues: {
//       name: "",
//       phone:"",
//       landLinePhone:"",
//       address:"",
//       DetailedAddress:""
//     },
//   });
//   return (
//     <section>
//       <h2>배송 정보</h2>
//       <div className="border p-5 my-5">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>이름</FormLabel>
//               <FormControl>
//                 <Input placeholder="수령인" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="orderName"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>배송지명(선택)</FormLabel>
//               <FormControl>
//                 <Input placeholder="배송지명" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>휴대폰</FormLabel>
//               <FormControl>
//                 <Input placeholder="01012345678(- 제외)" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="landLinePhone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>전화번호</FormLabel>
//               <FormControl>
//                 <Input placeholder="01012345678(- 제외)" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>배송지 주소</FormLabel>
//               <FormControl>
//                 <Input placeholder="주소" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="DetailedAddress"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel></FormLabel>
//               <FormControl>
//                 <Input placeholder="상세 주소" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>
//     </section>
//   );
// };

// export default DeliveryInfomation;
