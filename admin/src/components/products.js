import React, { PureComponent } from "react";
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
class App extends PureComponent {
    constructor(props){
        super(props)
    
  this.state = {
      data:[],
 
  }
  this.getData=this.getData.bind(this)
  this.delete=this.delete.bind(this)
}
componentDidMount(){
  this.getData()
}
getData(){
axios.get("http://192.168.22.213:3333/api/poducts")
  .then((res)=>{
    this.setState({data:res.data})
  }).catch((err)=>{
    console.log(err)
  })

}
delete(id){
  axios.delete("http://192.168.22.213:3333/api/poducts/"+id)
  .then((res)=>{
    this.getData()
  })
}

  render() {
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       color: theme.palette.text.primary,
    //     },
    //   }));
      
    return (
        <div>  
            <Grid >
      <Grid item xs={4}>
        <Typography>Filled</Typography>
      </Grid>
      </Grid>
      </div>
      
    );
  }
}

export default App;