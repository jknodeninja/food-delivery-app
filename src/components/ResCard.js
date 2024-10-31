import { IMG_URL } from "../utils/constants";
const ResCard = (resData) => {

    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData?.resData?.info;

    return (
        <div className='res-card'>
                <div className="card-logo">
            
                  <img alt="" src={IMG_URL + '/' + cloudinaryImageId} />
               
                </div>
            <h3> {name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>* {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default ResCard;