import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
import "./Search.css"
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'22218786-ea1f20e1c5dc0b941cb486cad',
        images:[],
       
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true&per_page=200`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    
    render(){
        console.log(this.state.images);
        return(
            <div className="searchbar">
               
            <input    type="text" 
            style=
            {{backgroundColor:'black',
             color:'white',
         paddingTop:20,
            paddingLeft:70,
            fontSize:30,
            borderTopStyle:"hidden",
            borderRightStyle:"hidden",
            borderLeftStyle:"hidden",
            outline:"none",
            borderBottomStyle:"groove",

        
        }}
        placeholder="Search for images 🔍"
        name="searchText"
        
        value={this.state.searchText}
        onChange={this.onTextChange}
       
             />
           
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>): <h4>Search Images </h4>}

            </div>

        )
    }
}



export default Search;