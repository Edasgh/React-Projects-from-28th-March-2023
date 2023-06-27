class TaskTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }
    deleteTask() {
        axios.delete('http://localhost:5000/tasks/delete/'+this.props.obj._id)
            .then((res) => {
                console.log('Task deleted');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.deadline}</td>
                <td>{this.props.obj.category}</td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.deleteTask} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            });
    }
    componentDidUpdate() {
        axios.get('http://localhost:5000/tasks/')
        .then(response => {
            this.setState({ tasks: response.data });
        })
        .catch(function (error){
            console.log(error);
        });
    }
    tabRow() {
        return this.state.tasks.map(function(object, i){
            return <TaskTableRow obj={object} key={i} />;
        });
    }
    render() {
        return (
            <div>
                <h3>Task List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Category</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div>
                <h1>MERN Stack Task Management Application</h1>
                <Link to={"/create"} className="btn btn-primary">Create Task</Link>
                <br/><br/>
                <TaskList />
            </div>
        );
    }
}
export default App;
