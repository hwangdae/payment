// import React from 'react'
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//   } from "@/components/ui/form";
//   import { Input } from "@/components/ui/input";
// import { registerSchema } from '@/valitators/delivery';
// import { z } from 'zod';

// type RegisterInput = z.infer<typeof registerSchema>;

// interface FormType {
//     form : RegisterInput
// }
// const OrderInfomation = ({form}:FormType) => {
//   return (
//     <section>
//     <h2>주문자 정보</h2>
//     <div className="border p-5 my-5">
//       <FormField
//         control={form.control}
//         name="name"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>이름</FormLabel>
//             <FormControl>
//               <Input
//                 placeholder="이름을 입력해 주세요."
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="email"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>이메일</FormLabel>
//             <FormControl>
//               <Input
//                 placeholder="이메일을 입력해 주세요."
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="phone"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>휴대폰</FormLabel>
//             <FormControl>
//               <Input
//                 placeholder="01012345678(- 제외)"
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   </section>
//   )
// }

// export default OrderInfomation