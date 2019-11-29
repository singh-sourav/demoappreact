class JobsList extends React.Component {

    render() {
        // use this.props.filterTags to get filteredJobs
        const filteredJobs=this.props.jobs.filter(()=>{}) 
        const Jobs = filteredJobs.map((job) => <Job item={job} />);
        return (<div>{Jobs}</div>);
    }
} 


export default JobsList;