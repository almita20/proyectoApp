export function Button (props){
    return (
            <div className="button">
            <button style={
                    {
                     backroundColor: props.bgcolor,
                     }
                       }>
              {props.text}
               </button>
               </div>

            </div>

    )


}