function Sign(props)
{
  return(
    <div class="two">
    <h2 class="h2">{props.star}</h2>

    <img
    src={props.img}
    alt="this is a sign"
    />
    </div>
  )
}
export default Sign;
