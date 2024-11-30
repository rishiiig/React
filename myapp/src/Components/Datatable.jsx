const Datatable = (props) => {
    const { data } = props;

    return (
        <table className="Datatable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((value, i) => (
                        <tr key={i}>
                            <td>{value.name}</td>
                            <td>{value.designation}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Datatable;