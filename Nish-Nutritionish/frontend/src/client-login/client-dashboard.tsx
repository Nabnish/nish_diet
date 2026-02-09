
import { useState } from 'react';
import Nav from '../components/nav-bar';


function Dashboard() {




    function Greeting(){
        const [name,letName]=useState("Nab");
        const time=new Date().getHours();


        let Greeting;
        if(time<12){
            Greeting="Morning";
        }
        else if(time<17){
            Greeting='Afternoon';
        }
        else if(time<21){
            Greeting='Evening';
        }
        else{
            Greeting='Night';
        }

        return (
            <h2>Good {Greeting} {name}</h2>
        )
    }
    return(
        <div className="Main">
              <Nav/>
              <div className='Container'>
                <h1>DASHBOARD</h1>
                <div className=''>
                    <Greeting/>
                    <div className='analytics'>
                        <p className='height'>Lorem ipsum dolor sit amet.</p>
                        <p className='weight'>Lorem ipsum dolor sit amet.</p>
                        <p className='BMI'>Lorem ipsum dolor sit amet.</p>
                        <p className='condition'>Lorem ipsum dolor sit amet.</p>
                        <p className='measurement'>Lorem ipsum dolor sit amet.</p>

                    </div>
                </div>
              </div>
        </div>
    )
}

export default Dashboard