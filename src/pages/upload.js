import React,{ Component }  from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import Uploadimage from '../components/uploadimage';
import { Typography,Paper,Grid } from '@material-ui/core';
import {Image} from 'react-bootstrap';

export default class Upload extends Component {
  constructor(props){
    console.log('Main Props',props);
    super();
    this.state = {
      loadings: false,
      document: '',
      switchstate:true,
      data_fin:[],
      data_per:[]

    }
  }

redirect_dashboard = (imageid,model1,model2,model3,final) =>{
  console.log(imageid);
  this.props.history.push('/dashboard/'+imageid+'/'+model1+'/'+model2+'/'+model3+'/'+final);
}


  componentDidMount(){
    
    }

  render(){
  return (
    <div >
      <Navbar />
      <div style={{display: "flex",width:'100%'}}>
        <div style={{width:"25%"}}>
            <Uploadimage redirects={this.redirect_dashboard} />
        </div>
        <div style={{width:"75%"}}>
          <div style={{display:"flex"}}>
          <Paper variant="outlined" style={{width:240,marginTop:120,marginLeft:"15%",height:250,marginBottom:10}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'center'}}>
                  Done by
                </Typography> 
                <Image  src="/Kiran.jpg" width={188} 
                height={148}  style={{marginTop:14,marginBottom:10,marginBottom:10}}/>  
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:5,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:156}}>
                  Kiran Babu 
                </Typography> 
          </Paper>
          <Paper variant="outlined" style={{width:240,marginTop:120,marginLeft:"15%",height:250,marginBottom:10}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'center'}}>
                  Done by
                </Typography> 
                <Image  src="/Iswarya.jpg" width={148} 
                height={148}  style={{marginTop:14,marginBottom:10,marginBottom:10}}/>  
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:5,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:146}}>
                  Iswarya
                </Typography> 
          </Paper>
          </div>

          <Grid container spacing={0}>
           
            <Grid  md={4}>
            <Paper variant="outlined" style={{width:240,marginTop:20,marginLeft:20,height:250,marginBottom:10}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'center'}}>
                  Guide
                </Typography> 
                <Image  src="/Sowmiya.jpg" width={148} 
                height={148}  style={{marginTop:14,marginBottom:10,marginBottom:10}}/>  
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:5,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:156}}>
                  Sowmya
                </Typography> 
            </Paper>
            </Grid>

            
            <Grid  md={4}>
            <Paper variant="outlined" style={{width:240,marginTop:20,marginLeft:20,height:250,marginBottom:10}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'center'}}>
                  Co-guide
                </Typography> 
                <Image  src="/Gopal.jpg" width={148} 
                height={148}  style={{marginTop:14,marginBottom:10,marginBottom:10}}/>  
                 <Typography  style={{color:'rgb(39, 39, 39)',marginTop:5,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:156}}>
                   Gopalakrishnan
                </Typography> 
            </Paper>
            </Grid>

            
            <Grid  md={4}>
            <Paper variant="outlined" style={{width:240,marginTop:20,marginLeft:20,height:250,marginBottom:10}} >
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:10,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'center'}}>
                  Co-guide
                </Typography> 
                <Image  src="/Soman.jpg" width={148} 
                height={148}  style={{marginTop:14,marginBottom:10,marginBottom:10}}/>  
                <Typography  style={{color:'rgb(39, 39, 39)',marginTop:5,fontSize:16,height:20,
                fontWeight:600,fontFamily:'Open Sans',textAlign:'left',marginLeft:20,width:156}}>
                  Soman
                </Typography> 
            </Paper>
            </Grid>

          </Grid>
        </div>
      </div> 
    </div>
  );
}

}