import React, { useEffect, useState } from "react";
import './Clients.css'

const OurClients = () => {
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch Clients Data
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/ClientsSlider.json"); // Correct fetch URL
        const data = await response.json();
        setClients(data);
      } catch {
        console.log("Error fetching clients data");
      }
    };
    fetchClients();
  }, []);



  return (
    <div className="md:py-14 py-2">
      <div className="md:max-w-7xl max-w-4xl mx-auto overflow-hidden">
       
        <div className=" grid grid-cols-8 animate-marquee ">
          {
            clients.length > 0 &&  clients.map((img,ind)=>{
                return(
                    <img
                    src={img.images}
                    />
                )
            })
          
          }
        </div>
      </div>
    </div>
  );
};

export default OurClients;
