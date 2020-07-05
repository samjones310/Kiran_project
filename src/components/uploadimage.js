import React,{ Component }  from 'react';
import '../App.css';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ImageUploading from "react-images-uploading";
import {CircularProgress} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Uploadimage(props) {

  const [upload,setUpload]= React.useState(false);
  const [progress,setProgress]= React.useState(false);
  const [uploadprog,setUploadprog]= React.useState(0); 
  const [data,setData]=React.useState({});

  const handleClosebox = () => {
    setUpload(false);
    props.redirects(data.filename,data.model1,data.model2,data.model3,data.main_model);
  };

  const onFileChange = (imageList)  => {
    setProgress(true);
    //console.log(props.document,props.userid);
    //console.log(props.switchstate);
    const formData = new FormData();
    formData.append('file_name', imageList[0]['file']);
    axios({
      method: 'POST',
      headers: {
        'enctype': "multipart/form-data",
        'Content-Type': 'multipart/form-data'
      },
      data: formData,
      url: 'http://34.66.199.40:5000/upload',

      onUploadProgress: (ev) => {
        const progress = parseInt((ev.loaded / ev.total) * 100);
        //updateUploadProgress(Math.round(progress));
        console.log(progress);
        setUploadprog(progress);
      },
  })
  .then((resp) => {
      setProgress(false);
      setUpload(true);
      setData(resp.data);
      console.log(resp);

  })
  .catch((err) => console.error(err));

  };


  return (

    <div style={{position:"fixed",width:310,border: '1px solid rgb(238, 238, 238)',marginTop:100,
    backgroundColor: 'rgb(255, 255, 255)',height:'100%'}}>
      <>
    <Typography style={{color: "rgb(30, 30, 30)",fontFamily: "Open Sans",fontSize: 18,
        fontWeight: 600,height: 24, width: 290,textAlign:'left',marginLeft:20,marginTop:20,marginBottom:10}}> 
            Upload a MRI  of brain
    </Typography>
    <Typography style={{ color: 'rgba(30, 30, 30, 0.7)',fontFamily: "Open Sans",fontSize: 14,
        fontWeight: 'normal',height: 18,width: 294,textAlign:'left',marginLeft:20,marginBottom:15}}>
            <i>Click and upload a MRI of brain.</i>
    </Typography>
    </>

    {!progress && 
    <ImageUploading multiple onChange={onFileChange} maxNumber={1} multiple={false}>
          {({ imageList, onImageUpload }) => (
        <div style={{ cursor:'pointer' ,marginLeft:20,border: '2px dashed rgb(60, 153, 230)',height: 195,width: 270}} onClick={onImageUpload}>
          <Add style={{color:'#3c99ee',fontSize:30,marginTop:70}}/>
          <Typography style={{ color: 'rgba(30, 30, 30, 0.4)',fontFamily: "Open Sans",fontSize: 16,
          fontWeight: 'normal',height: 16,width: 194,textAlign:'center',marginLeft:40,marginBottom:15}}>
            Upload a image here
          </Typography>
        </div>
          )}
    </ImageUploading>
    }

    {progress && 
      <CircularProgress value={uploadprog} />
    }

    <Dialog
        maxWidth={"lg"}
        height={400}
        open={upload}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosebox}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >

    <DialogTitle id="alert-dialog-slide-title">
    
    </DialogTitle>

    <DialogContent>
      <Typography  style={{color:'rgb(39, 39, 39)',fontSize:'18px',width:400,
          fontWeight:600,fontFamily:'Open Sans',textAlign:'center',marginBottom:10}}>
            Image uploaded successfully.
    </Typography> 

      <Button  variant="outlined" style={{marginLeft: 150}} onClick={handleClosebox} >
        <Typography  style={{color:'#084992',fontFamily:"Open Sans",fontStyle:16}}>
            <b>PROCEED</b>
        </Typography>
      </Button> 
    </DialogContent>
    <DialogActions>
    </DialogActions>
    </Dialog>

    { /*<Typography style={{ color: 'rgb(30, 30, 30)',fontFamily: "Open Sans",fontSize: 16,
      fontWeight: 600,width: 300,textAlign:'left',marginLeft:20,marginBottom:15,marginTop:10}}>
        Auto detect Document type
      <FormControlLabel
        style={{marginLeft:55,width:20,marginRight:0}} 
        control={<BlueSwitch size={40}  checked={props.switchstate} onChange={toggleChecked}  color={'default'}/>}/>
      </Typography> */}
    
    </div>
  )
}
