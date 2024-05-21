import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HorizontalList=({items})=> {
  return (
    <>
      <div>
        <Carousel breakPoints={breakPoints}
          enableAutoPlay autoPlaySpeed={3000}
        
        >
          { items.map((item, index) =>
          {
            return(
          <>
          <div style={{height:'360px',width:'320px',display:"flex",justifyContent:"center"}}>
          <Item >
            
            <
            img
            src={item.src}
            alt={item.title}
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 8px 16px rgba(235, 0, 230, 30)",
            }}
          />
         
          <p style={{marginTop:'10px',color:'black',fontSize:16,fontFamily:'cursive'}}>{item.title}</p>
          </Item>
          </div>
          </>
            )})
          }
        </Carousel>
      </div>
    </>
  );
}

export default HorizontalList;