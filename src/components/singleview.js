import React from 'react';
import '../App.css';
import {Typography} from '@material-ui/core';
import {Image} from 'react-bootstrap';
function Singleview(props) {
    console.log(props);
    return (
      <div style={{position:"fixed",width:"25%",border: '1px solid rgb(238, 238, 238)',marginTop:0,
      backgroundColor: 'rgb(255, 255, 255)',height:'100%'}}>
        <Typography style={{fontWeight: 600,width: 300,marginTop:140,fontFamily:'open sans',fontSize:18,
          marginLeft:20,color:'rgb(30, 30, 30)',textAlign:'left'}}>
            Image uploaded
        </Typography>  
        <Image  src={"http://34.66.199.40:5000/static/"+props.image} width={300} height={200}
              style={{marginTop:20,marginLeft:20,marginRight:20,marginBottom:10}}/>

        <a href="/" style={{color: "rgb(60, 153, 230)",fontFamily: "Open Sans",fontSize:14, textDecoration:'uderline',
        textAlign:'center',fontWeight: 400}}>
            Reupload document?
        </a>
  

      </div>
    )
    }
export default Singleview;