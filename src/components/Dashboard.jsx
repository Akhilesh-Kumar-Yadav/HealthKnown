import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const bodyType = [
    {
      name: "Ectomorph",
      description : "Naturally skinny build with long limbs, low body fat, and fast metabolism. Gains muscle slower but stays lean easily.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    },
    {
      name: "Mesomorph",
      description : "Athletic and muscular build, easily gains and loses weight, naturally strong and well-defined muscle structure.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    },
    {
      name: "Endomorph",
      description : "Rounder, softer body type with a tendency to store fat easily, especially around hips and waist. Gains muscle but struggles with fat loss.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    },
    {
      name: "Hourglass",
      description : "Balanced upper and lower body with a well-defined waist. Often associated with strong curves.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    },
    {
      name: "Pear (Triangle)",
      description : "Smaller upper body and wider hips/thighs. Weight tends to concentrate around lower body.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    },
    {
      name: "Apple (Inverted Triangle)",
      description : "Broader shoulders and chest with slimmer legs and hips. Weight tends to concentrate around midsection.",
      image : "https://i.pinimg.com/736x/79/77/39/7977391f10a9a7fe70346b762ad4ad97.jpg"
    }
  ];

  const handleSelect = (item) => {
    navigate(`/target-setup?bodyType=${item.name}`);
  }

  return (
    <div className='bg-gray-200 min-h-screen p-6'>
      <h1 className='text-3xl font-bold mb-4 text-yellow-600'>Choose your body type</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {bodyType.map((item) => {
          return (
            <div 
              key={item.name} 
              className='bg-white p-6 rounded-xl text-center shadow-xl hover:scale-105 transition-all cursor-pointer'
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className='h-40 w-40 rounded-full object-cover mx-auto mb-4' 
              />

              <h2 className='text-gray-700 font-semibold text-xl'>
                {item.name}
              </h2>

              <p className='text-md mb-4 text-gray-600'>{item.description}</p>

              <button 
                onClick={() => handleSelect(item)} 
                className='bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600'
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;