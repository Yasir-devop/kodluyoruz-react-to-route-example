import {useEffect,useState} from "react";
import {NavLink,Switch,Route,useRouteMatch} from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
    const [users,setUsers] = useState([]);
    const { path, url } = useRouteMatch();
    useEffect(() =>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data));
    },[])
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink activeStyle={{ fontSize:30,backgroundColor:"black",color:"#fff",marginTop:10 ,marginBottom:20 }} to={`${url}/${user.id}`}>{user.name}</NavLink>
                        </li>
                ))}
            </ul>
            <hr/>

            <Switch>
                <Route exact path={path}>
                <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}/>
            </Switch>
        </div>
    )
}

export default Users
