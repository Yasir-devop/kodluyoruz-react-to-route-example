import {useParams,NavLink} from 'react-router-dom'
import {useEffect,useState} from 'react';
import axios from 'axios';
function User() {
    const [user,setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
    },[id])
    return (
        <div>
            <h1>User Detail</h1>
            <pre>
                {/* <code>{JSON.stringify(user)}</code> */}
                <code>{<h1 style={{ marginLeft:10 }}>Name: {user.name}</h1>}</code>
                <code>{<h1 style={{ marginLeft:10 }}>Surname: {user.username}</h1>}</code>
                <code>{<h1 style={{ marginLeft:10 }}>E-Mail: {user.email}</h1>}</code>
                <code>{<h1 style={{ marginLeft:10 }}>Phone: {user.phone}</h1>}</code>
            </pre>

            <span>
                <NavLink style={{ padding:10,fontSize:20,backgroundColor:"green",color:"#fff",marginTop:10 ,marginBottom:20 }} to={`/users/${parseInt(id) + 1}`}>Next User</NavLink>
            </span>
        </div>
    )
}

export default User
