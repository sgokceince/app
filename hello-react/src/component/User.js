import PropTypes from "prop-types"


function User({name, surname, isLoggedIn, age, friends, address}) {
   
    if (!isLoggedIn){
        return <div>"Giriş yapmadınız."</div>
    }
    
    return(
        <>
        <h1>
            {
               `${name} ${surname} (${age}) ${friends}`
            }
        </h1>

        {address.title} {address.zip}
        <br />
        <br />
        {friends && friends.map((friend, index)=> (
            <div key= {index}>
                {index}-{friend}
            </div>
            ))}
        </>
    )
}


User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([ //oneOfType ile birden fazla veri tipi kabul edilir.
        PropTypes.number,
        PropTypes.string
    ]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })

};

User.defaultProps = {
    isLoggedIn: false
}

export default User;