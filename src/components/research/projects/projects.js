import React, { useState } from 'react';
import '../../home/home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';


const Projects = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <style>
        {`


.page-main{
    display: grid;
    
    grid-template-columns: auto 1fr;
    gap: 50px;
}
 

.imgmain{
    display: flex;
    flex-direction: row;
}
.lefts{
    display: flex;
    margin-top:50px;
    flex-direction: column;
}
.hi:hover{
    color: rgb(43, 135, 193);
}
.subr{
    margin-bottom: 200px;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}
    body{
    padding-top: 80px;
}

.year{
    width: 1292px;
    height: 35px;
    margin-top: 75px;
    padding-left:10px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
.subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 25px;
    border: 1px solid grey;
}
.subrows div{
    border-right: 1px solid grey;
    width: 200px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}


@media(max-width:367px){
    .rights{
        display: none;
        
    }

.page-main{
    display: grid;
    margin-left:0;
    grid-template-columns: 1fr;
}
    
.head {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 2px;
        padding-bottom: 15px 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 367px;
        font-size: 12px;
        right: 0;
        z-index: 10;
        border-bottom: 5px solid white;
        background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    }
     .year{
    width: 691px;
    margin-top: 0;
    height: 35px;
    padding-left:10px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
    .subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 18px;
    border: 1px solid grey;
}
    .subrows div{
    border-right: 1px solid grey;
    width: 100px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}
}
        `}
      </style>
      <Navbar/>

    <div class="page-main">
<Sidebar/>

        <div className='prjm'>
    <div class="year">Research Projects Executed:
    </div>
    <div class="subrows">
    <div>S.No</div>
    <div>Title</div>
    <div>Sponsoring Agency</div>
    <div>Period</div>
    <div>Amount
        Rs/-
        in lakhs</div>
    <div>Status</div>
    </div>
    <div class="subrows">
        <div>1</div>
        <div>    
            International Travel Grant Grant to Dr. Venu Reddy

        </div>
        <div>SERB
        </div>
        <div>One week
        </div>
        <div>0.86 L
        </div>
        <div>completed
        </div>
       
        </div><div class="subrows">
            <div>2
            </div>
            <div>Inspire Faculty Research Grant to Dr. Venu Reddy
            </div>
            <div>DST DST/INSPIRE Faculty Award/IFA13-ENG70 DATED 24.04.2018
            </div>
            <div>2017-18
            </div>
            <div>29.00
            </div>
            <div>completed 5 years (3 yrs at University of Hyderabad and 2 years at SRKR)
            </div>
            </div>
            <div class="subrows">
                <div>3
                </div>
                <div>Miniaturized electrochemical devices for the automated ampliflex detection of cancer biomarkers
                </div>
                <div>"DST
                    Indo-Korean Joint Research Project INT/Korea/P-27 Dated 22.03.2018"
                    
                </div>
                <div>"2017-
                    18"	
                    
                </div>
                <div>15.19

                </div>
                <div>Completed

                </div>
                </div>
                <div class="subrows">
                    <div>4
                    </div>
                    <div>Application of probiotics in treating drinking water	

                    </div>
                    <div>Mission Cell : Solar energy and Water, DST New Delhi

                    </div>
                    <div>"2009-
                        2012"	
                        
                    </div>
                    <div>33.57

                    </div>
                    <div>Completed

                    </div>
                   
                    </div><div class="subrows">
                        <div>5
                        </div>
                        <div>Impact of aquaculture on soils and groundwater quality in parts of the coastal tracts of Godavari central delta	
                        </div>
                        <div>Mission Cell : Solar energy and Water, DST New Delhi

                        </div>
                        <div>"2012-
                            2015"	
                            
                        </div>
                        <div>29.93
                        </div>
                        <div>Completed

                        </div>
                        
</div>
<div class="subrows">
<div>6
</div>
<div>Environmental pollution of Kolleru Lake and its control by conventional and non- conventional methods	

</div>
<div>UGC, New Delhi

</div>
<div>"1994-
    96"	
    
</div>
<div>1.25
</div>
<div>Completed

</div>

</div>
<div class="subrows">
<div>7
</div>
<div>Removal of Ca++ and Mg++ from brine solution by methylmethacrylate-ethylene Glycol dimethacrylate polymeric adsorbents,	

</div>
<div>Guest Scientist, CSIR, New Delhi

</div>
<div>"1992-
    93;
    1994-
    95"	
    
</div>
<div>
</div>
<div>Completed

</div>

</div>
<div class="subrows">
    <div>8
    </div>
    <div>Electro Organic Synthesis	

    </div>
    <div>UGC, New Delhi

    </div>
    <div>"1989-
        1991"	
        
    </div>
    <div>3.95

    </div>
    <div>Completed

    </div>
    
    </div>
                                        
                                            
                            
        </div>
</div>
    </div>
  )
}

export default Projects