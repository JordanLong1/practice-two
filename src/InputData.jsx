import React from 'react'; 

function InputData(props) {
    return (
        <div>
            <form>
                <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} /> 
            </form>
        </div>
    );
};


export default InputData;