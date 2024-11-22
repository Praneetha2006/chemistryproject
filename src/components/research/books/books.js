import React, { useState } from 'react';
import '../../home/home.css';
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';


const Books = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    .bmain{
     width: 640px;
     padding-top: 25px;
    }

    .bsub{
     border: 1px solid rgb(253, 250, 250);
     height: 570px; 
     width: 200px;
     margin-left: 100px; 
     padding: 20px 15px; 
     font-size: 18px; 
     background-color: rgb(236, 234, 234); 
     margin-top: 50px;
    }
    .year{
    width: 630px;
    margin-top: 40px;
    height: 35px;
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
    .bmain{
     width: 350px;
     padding-top: 25px;
    }
.page-main{
    display: grid;
    margin-left:0;
    grid-template-columns: 1fr;
}
    .bsub{
     border: 1px solid rgb(253, 250, 250);
     height: 570px; 
     width: 200px;
     margin-left: 100px; 
     padding: 20px 15px; 
     font-size: 18px; 
     background-color: rgb(236, 234, 234); 
     margin-top: 50px;
    }
     .year{
    width: 340px;
    margin-top: 40px;
    height: 35px;
    padding-left:10px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}

        `}
      </style>
 <Navbar/>

    <div class="page-main">
     <Sidebar/>
    
        <div className='bmain'>
    <div class="year">Research Books Executed:
    </div>
    <div class="subrows">
    <div>Name of the Author</div>
    <div>Title of the Book & ISBN no</div>
    <div>Year of Publication</div>
    </div>

    <div class="subrows">
        <div>Dr. K. Anji Reddy</div>
        <div>Engineering Chemistry 1		
        </div>
        <div>2010		
        </div>
    </div>
    <div class="subrows">
        <div></div>
        <div>Engineering Chemistry 2		
        </div>
        <div>2010		
        </div>
    </div>
    <div class="subrows">
        <div></div>
        <div>Engineering Chemistry</div>
        <div>2010</div>
    </div>
    <div class="subrows">
        <div>Dr. K.V. Subba Raju</div>
        <div>Success Secrets for Engineering Students& 978-81-928134-4-8</div>
        <div>2010</div>
    </div>
    <div class="subrows">
        <div></div>
        <div>Zeroto Hero to Super hero</div>
        <div>2014</div>
    </div>
    <div class="subrows">
        <div></div>
        <div>Mee  Chiunnari   oka  Medhavi Ela? 978-81-928134-9-3</div>
        <div>2014</div>
    </div>
    <div class="subrows">
        <div>Dr. B. S. Diwakar</div>
        <div>Applied Chemistry for Engineering Courses &978-1- 68576-091-5</div>
        <div>2021</div>
    </div>
    <div class="subrows">
        <div>Dr. P. L. Kishore</div>
        <div>Applied Analysis & 978-620-2- 79764-1</div>
        <div>2020</div>
    </div>
</div>
</div>
    </div>
  )
}

export default Books