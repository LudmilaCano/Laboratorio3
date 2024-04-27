
const Table = ({ netIncomes }) => {
  return (
    <div>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Brand</th>
                    <th scope="col">Income</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((netIncome) => (
                    <tr>
                        <td>{netIncome.brand}</td>
                        <td>{netIncome.income}</td>
                </tr>
                ))}
            <p style={{textAlign: "center"}}>Promedio de ingreso neto: ${((netIncomes.reduce((total, netIncome) => total + netIncome.income, 0)) / (netIncomes.length)).toFixed(2)}</p>
            </tbody>
        </table>
        
    </div>
  );
};

export default Table
