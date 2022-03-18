import Sign from './Sign.jsx';
import Exp from './Exp.jsx';

function Box(props){
  return(
  <div className="box">

  <Sign
  star={props.star}
  img={props.img}
  />

  <Exp
  exp={props.exp}
  />

</div>);
}


export default Box;
