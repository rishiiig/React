const Simple = (props) => {
    const {message} = props;
    console.log(props);

    const {name, designation} = message;

    return (
        <div className="container">
            <div className="main">
                <p> {name} is an {designation} </p>
            </div>
        </div>
    )
};

export default Simple;
