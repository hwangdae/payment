import { MerchandiseType } from '@/types/mockupData';
import React from 'react'

interface MerchandiseProps {
  items : MerchandiseType[]
  setItems : React.Dispatch<React.SetStateAction<any>>
  merchandise : MerchandiseType | undefined
}

const SelectedItem = ({items,setItems,merchandise}:MerchandiseProps) => {

  const plusButtonHandler = (itemId: string) => {
    setItems((prevItems: MerchandiseType[]) =>
      prevItems.map((item: MerchandiseType) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: Number(merchandise?.price) * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const minusButtonHandler = (itemId: string) => {
    setItems((prevItems: MerchandiseType[]) =>
      prevItems.map((item: MerchandiseType) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: Number(merchandise?.price) * (item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <ul>
    {items.map((item: MerchandiseType) => {
      return (
        <li
          key={item.id}
          className="flex justify-between border px-4 py-2 text-sm items-center"
        >
          <span className="w-[40px]">{item.size}</span>
          <div className="flex w-[110px]">
            <button
              type="button"
              className={`border px-2 bg-gray-100 ${
                item.quantity <= 1 ? " text-gray-300" : ""
              }`}
              onClick={() => minusButtonHandler(item.id)}
            >
              -
            </button>
            <p className="border w-[38px] text-center">
              {item.quantity}
            </p>
            <button
              type="button"
              className="border px-2 bg-gray-100"
              onClick={() => plusButtonHandler(item.id)}
            >
              +
            </button>
          </div>
          <div className="flex text-gray-600">
            <p className="w-[82px]">
              {item.price.toLocaleString()}원
            </p>
            <button
              className="px-2"
              onClick={() => {
                setItems(
                  items.filter((listItem: MerchandiseType) => {
                    return listItem.id !== item.id;
                  })
                );
              }}
            >
              x
            </button>
          </div>
        </li>
      )
    })}
      </ul>
  )
}

export default SelectedItem