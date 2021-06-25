import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import "./imageResults.css"
class ImageResults extends Component{
    state={
        open:false,
        currentImg:'', 
        visible:16,
        
        
    }
    showMore = this.showMore.bind(this)
    handleOpen=img=>{
        this.setState({open:true,currentImg:img})
    }
    
    handleClose=()=>{
        this.setState({open:false});
    }
   
  showMore(){
    this.setState((old)=>{
          return{visible:old.visible + 8}
      })
  }
    render()
    {
        let imageList;
        const {images}=this.props

        if(images)
        {
            imageList=(
                <GridList cols={4}>
                {  images.splice(0,this.state.visible).map(img=>(
                        <GridTile
                        title={img.tags}
                        key={img.id}
                        actionIcon={
                            <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                            <ZoomIn color="white" />
                            </IconButton>
                        }
                        >
                        <img src={img.largeImageURL} alt="" />
                        </GridTile>
                    ))
                }
                </GridList>
            )
        }
        else{
            imageList=null;
        }
        const actions=[
            <FlatButton  label="Close" primary={true} onClick={this.handleClose}/>
        ]
        return(
            <div style={{marginLeft:50,marginRight:50,marginTop:20}}>
            {imageList}
            <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
            </Dialog>
            <div className="container">
          
                <button
               
                type="load" onClick={this.showMore} className="glow-on-hover">Load More </button>
               
            </div>
           
            </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;
// style=
// {{backgroundColor:'black',
//  color:'white',
// marginLeft:690,
// marginTop:100,
// paddingTop:10,
// paddingLeft:10,
// fontSize:30,

// }}