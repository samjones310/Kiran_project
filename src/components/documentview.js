import React from 'react';
import '../App.css';
import {Typography,Grid,Paper,Button} from '@material-ui/core';
import {Image} from 'react-bootstrap';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function Documentview(props) {
console.log(props);
return (
    props.loadings ? <div></div> : <div style={{marginTop:100,marginLeft:10}}>

    <Typography style={{color:'rgb(30, 30, 30)',fontFamily:'Open Sans',fontSize:18,fontWeight:600,marginTop:120,textAlign:'center'}}>
    PARKINSONS DEISEASE DETECTION USING ENSEMBLED DEEP LEARNING
    </Typography>

    <Paper variant="outlined" style={{width:325,marginTop:25,marginLeft:380,height:150}} >
    <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
        fontWeight:600,fontFamily:'Open Sans',textAlign:'center',marginLeft:20,width:256}}>
        ENSEMBLE 
    </Typography>
    <Typography  style={{color:'rgb(39, 39, 39)',marginTop:15,fontSize:16,height:20,
      fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:256}}>
        Result: <b>
        {props.final.split(',')[0]==1 && 'Not affected'}
        {props.final.split(',')[0]==0 && 'Affected'}
        </b> 
    </Typography>
     
    <Typography  style={{color:'rgb(39, 39, 39)',marginTop:15,fontSize:16,height:20,
      fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:256}}>
        Confidence: <b>{props.final.split(',')[1]}</b>
    </Typography>
    </Paper> 


    <Typography style={{color:'rgb(30, 30, 30)',fontFamily:'Open Sans',fontSize:18,fontWeight:600,
    width:417,marginTop:30,textAlign:'center',marginLeft:'30%',marginBottom:20}}>
       Individual models
    </Typography>

    <div style={{display:'flex'}}>

            <div>
              <Paper variant="outlined" style={{width:325,marginTop:5,marginLeft:40,height:190}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'center',width:256}}>
                      DENSENET
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:15,fontSize:14,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:256}}>
                      Result :
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                      Normal class score: <b>{props.model1.split(',')[1]}</b>
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                     Parkinson class score: <b>{props.model1.split(',')[0]}</b>
                </Typography>
              </Paper>    
          </div>
          <div >
              <Paper variant="outlined" style={{width:325,marginTop:5,marginLeft:10,height:190}} >
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'center',width:256}}>
                    VGG19
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:15,fontSize:14,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:256}}>
                   Result:
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                        Normal class score: <b>{props.model2.split(',')[1]}</b>
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                       Parkinson class score: <b>{props.model2.split(',')[0]}</b>
                </Typography>
              </Paper>    
          </div>
          <div >
              <Paper variant="outlined" style={{width:325,marginTop:5,marginLeft:10,height:190}} >
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'center',width:256}}>
                        VGG16
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:15,fontSize:14,height:20,
                  fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:256}}>
                        Results:
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                        Normal class score: <b>{  props.model3.split(',')[1]}</b>
                </Typography>
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:14,height:20,
                  fontWeight:400,fontFamily:'Open Sans',textAlign:'left',marginLeft:40,width:256}}>
                       Parkinson class score: <b>{props.model3.split(',')[0]}</b>
                </Typography>
              </Paper>    
          </div>
     </div>
     <br /><br />

  </div>
)
}
export default Documentview;