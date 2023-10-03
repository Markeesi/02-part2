const Hello = ({ name, age }) => {


    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - age
    }

    return (
        <>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>So you were probably born {bornYear()}</p>
        </>
    )

};


export default Hello;