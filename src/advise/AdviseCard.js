import React, {useEffect, useState, useRef} from "react";
import  "./AdviseCard.css";


function AdviseCard(props){
    const [advice, setAdvice] = useState("");
    const [slip_id, setSlipId] = useState("");
    const { onClick } = props;
    const ref = useRef();

  
    useEffect(() => {
        const url = "https://api.adviceslip.com/advice"; 
        const clickedBtn = document.getElementById('dice');
        clickedBtn.addEventListener('click', ()=> {
            fetchData();
        })

        const fetchData = async () =>{
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
                setSlipId(json.slip.id)
                console.log(json.slip.id)
            } catch (error){
                console.log("error", error);
            }
        };
       
        fetchData();
      
        
  
        
    })


    return(
        <div className="container">
            <div className="adviceCard">
                <h6 className="advisehead">ADVICE <span>#{slip_id}</span></h6>

                <p className="adviceBody">
                    "{advice}" 
                </p>
                <div className="divider">
                <svg className="smallDivider" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                <svg className="bigDivider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

                </div>
                <div className="clickDice" id="dice" ref={ref}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                </div>
            </div>
            
        </div>
    )
}


export default AdviseCard;