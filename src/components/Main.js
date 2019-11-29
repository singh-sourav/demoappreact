import FilterList from "./FilterList"
import JobsList from "./JobsList"

class Main extends React.Component {


    // maintain filter status here, pass them to JobsList for it to filter the jobs

    state = { content: "", industry: "", status: "", timeFilter: "", jobs: [] }

    componentDidMount() {
        //fetch data
    }


    changeContent = (e) => {
        const val= e.target.value;
        this.setState({
            content: val,
        })
    }
    changeIndustry = (e) => {
        const val= e.target.value;
        this.setState({
            industry: val,
        })
    }
    changeStatus = (e) => {
        const val= e.target.value;
        this.setState({
            status: val,
        })
    }
    changeTimefilter = (e) => {
        this.setState({
            timeFilter: e.target.val,
        })
    }
    render() {
        return (
            <div>
                {/* arrange them in column */}
                <h1>Your Jobs</h1>
                <FilterList changeContent={this.changeContent} changeIndustry={this.changeIndustry} changeStatus={this.changeStatus} changeTimefilter={this.changeTimefilter}  />
                <JobsList jobs={this.state.jobs} filterTags={...this.state}/>
            </div>
        )
    }

}

export default Main;