import PriceOption from "../PriceOption.jsx/PriceOption";

const Priceoptions = () => {
    const pricePrediction =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "duration": "1 month",
          "features": ["Access to cardio area", "Limited group classes", "Locker room access"]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "duration": "3 months",
          "features": [
            "Access to all gym areas",
            "Unlimited group classes",
            "Personal trainer sessions (2/month)",
            "Sauna and spa access"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 89.99,
          "duration": "6 months",
          "features": [
            "Access for 2 adults and 2 children",
            "All gym facilities and group classes",
            "Childcare services",
            "Discounts on additional services"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": 19.99,
          "duration": "1 semester",
          "features": ["Access to gym during semester", "Discounted group classes"]
        }
      ]
      
    return (
        <div className="m-12"> 
            <h2 className="text-5xl"> Best Price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6  m-4">
            {
                pricePrediction.map(option=><PriceOption
                key={option.id}
                option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Priceoptions;