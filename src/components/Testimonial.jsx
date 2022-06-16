import React,{useState} from "react";
import testimonialData from "./TestimonialData";
const Testimonial=()=>{
  const [items, setItem]=useState(testimonialData);
    return(
      <>
       <div className="container-fluid nav-bg bg-color:black">
<div className="row">

    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
       
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
     
                    {
       items.map((data, index) => {
     
        return (
         
          <li>
              <img src={data.image} className="wpx-100 img-round mgb-20" title="" alt={data.name} data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
              <p className="fs-110 font-cond-l" contenteditable="false"><q>{data.description}</q></p>
              <h5 className="font-cond mgb-5 fg-text-d fs-130 text-success" contenteditable="false">-{data.name}</h5>
              <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">{data.address}</small>
          </li>
 

                
        );
      }
      
      )
    }
        
       
      </ul>
</div>
  </div>
      
     
      </>
    );
    }
    
    export default Testimonial;
    