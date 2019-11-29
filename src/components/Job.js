import { isTemplateElement } from "@babel/types";

class Job extends React.Component{

    // item object contains all the data about job. Use it to show here. Change var names according to what you fetch

render(){
    const {item}=this.props;
    return (
        <div>
            {/* arrange in row */}
            <div>
                {/* arrange in column */}
                <p>{this.props.jobtitle}</p>
                <p>{item.info}</p> 
            </div>
            <h1>{item.price}</h1>
            <div>{item.revisionStatus}</div>
            <div>{item.timeLeft}</div>
            <button>{item.buttonType}</button>
        </div>
    );
}

}

export default Job;