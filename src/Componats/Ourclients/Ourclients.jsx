import React, { useEffect, useState } from "react";
import './Clients.css'

const OurClients = () => {
  const [clients, setClients] = useState([]);
  

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
    <div className="md:py-14 pt-10">
      <div className="overflow-hidden">
       
        <div className=" grid md:grid-cols-8 grid-cols-4 animate-marquee ">
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
