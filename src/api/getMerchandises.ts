import axios from "axios";

const getMerchandises = async() => {
  const { data } = await axios.get("http://localhost:4000/MERCHANDISES");
  return data;
};

const getDetailMerchandise = async(id:string | string[] | undefined) => {
    const {data} = await axios.get("http://localhost:4000/MERCHANDISES");
    const merchandise = data.find((item:any)=>{
        return  item.id === id
    })
    return merchandise
}

export { getMerchandises,getDetailMerchandise };
