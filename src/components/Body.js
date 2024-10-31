import ResCard from "./ResCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    const [resList1, setResList1] = useState(resList);
    return (
        <>
            <button className="top-btn" onClick={()=> {
                const filteredList = resList1.filter(res => res.info.avgRating>4);
                setResList1(filteredList)
            }}>Top Rated</button>
            <div className="body">
                {resList1.map((resData) => {
                    return (<ResCard key={resData.info.id} resData={resData} />)
                })}
            </div>
        </>
    )
}

export default Body;