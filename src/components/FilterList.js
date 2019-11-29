class FilterList extends React.Component{
// All the values are passed from the parent component
    render(){
        return(
            <div>
                <div>
                <input type="dropdown" onChange={this.props.onChangeContent}/>
                <input type="dropdown" onChange={this.props.onChangeContent}/>
                <input type="dropdown" onChange={this.props.onChangeContent}/>
                </div>
                <div>
                <h3>Showing 1-8 of 123 jobs</h3>
                <input type="dropdown" onChange={this.props.onChangeContent}/>
                </div>
                
            </div>
        )
    }
}

export default FilterList;