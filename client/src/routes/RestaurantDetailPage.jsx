import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { ReviewsContextProvider } from "../context/ReviewsContext";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <ReviewsContextProvider>
      <div>
        {selectedRestaurant && (
          <>
            <div className="mt-3">
              <Reviews id={id} amit="kofa"/>
            </div>
            <AddReview />
          </>
        )}
      </div>
    </ReviewsContextProvider>
  );
};

export default RestaurantDetailPage;
