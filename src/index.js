import React from 'react';
import ReactDOM from 'react-dom';

function BigDiv() {
return  (<div
            className="BigDiv"
          style={{ 
             textAlign:'center',
          verticalAlign: "middle",
lineHeight: "25px",
   position: "relative",
     height:"55%",
              margin:"50px auto"
          }}>
</div> );           

}
function Header() {
return(
  <h1 className="Header"
  style={{

padding: "60px",
textAlign: "center",
background: "#1abc9c",
color: "white",
fontSize: "30px"
      }
}>
TimeTravelingKnight</h1>);


}

function NextDiv() {
return(
  <div className="NextDiv"
  style={{ 
     textAlign:'center',
  verticalAlign: "middle",
lineHeight: "25px",
position: "relative",
width:"50%",
      margin:"50px auto"
  }}>
<Header />

</div>
);


}

function Eden(props) {
  return (
  <div className="Eden"
     
style={{  
  backgroundImage: "url(" + props.user.avatarUrl+ ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
 height: '700px',
    
}
      }>
         
      <BigDiv />        
        <NextDiv />    
        
      </div>
  );
}

function Comment(props) {
  return (
  
    
      <Eden user={props.author}/>
              
    
     
    
  );
}
function Heading2(prop) {
  return(
<div class="Heading2"

style={{ 
 
verticalAlign: "middle",
lineHeight: "5px",

}

}>
<h1
style={{

  textAlign: "center",
  
  fontSize: "60px"
        }

      }>

{prop.CASE}
     </h1>

     </div>  
  );
}


function LIFESTORY() {
return (
  <div class="lifestory"
  style={{ 
    textAlign:'center',
 verticalAlign: "middle",
lineHeight: "10px",
position: "relative",
  }
  
}>
<p>Hello, I am a graduate student at XXX currently working on my thesis</p>
<p>I am currently a student assistant for an Algorithms course and doing some free lance work</p>

</div>
);

}


function Heads(props) {
return (
<div class="HEAD"
style={{
  float:"left",
  width:"33%"}
}>

<h1
style={{

  textAlign: "center",
  
  fontSize: "30px"
        }

      }>

{props.CASE}
     </h1>

  <p
  
  style={{

    textAlign: "center",
    
   
          }  
  
  
        }>{props.power}</p>

</div>

);


}


function About()  {
  return(
  <div class="ABOUT">
  <Heading2 CASE="About" />
  <LIFESTORY />
 <Heads  CASE="Technology" power="Azure, Docker, Dotnet Core, Heroku, React" />
 <Heads  CASE="Programming Languages" power="C#,C++,C" />
 <Heads CASE="Others" power="Git, Ubuntu"/>
  </div>);
  
  
  }
  


function Comment2() {
return (
<About />
);


}


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://www.wfs.games/en-us/service/assets/another-eden/img_01.png',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
ReactDOM.render (
<Comment2 />


,document.getElementById('root2')
);


