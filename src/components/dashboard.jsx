// import { useSelector  } from "react-redux"
// import { connect } from "react-redux"
function Dashboard(props){
    
    // const data = useSelector(state=>state.dataArr)
    return (
        <div>
            <div className="head2">
                <h2>Dashboard</h2>
                <p>{props.data}</p>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         data: state.dataArr
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getData: () => dispatch(getData())
//     }
// }

export default Dashboard