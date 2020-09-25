import React from 'react'
import './Table.scss'

const Table = () => {
    return <table className="AppTable">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Paella Seafood</td>
                <td>12.95</td>
                <td className="right">5</td>
            </tr>
            <tr>
                <td>Chorizo al vino</td>
                <td>10.50</td>
                <td className="right">4</td>
            </tr>
            <tr>
                <td>Grated Mahon</td>
                <td>8.90</td>
                <td className="right">5</td>
            </tr>
        </tbody>

    </table>
}

export default Table