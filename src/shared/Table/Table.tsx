import React from 'react'
// import './Table.scss'

const Table = () => {
    return <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Paella Seafood</td>
                <td>12.95</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Chorizo al vino</td>
                <td>10.50</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Grated Mahon</td>
                <td>8.90</td>
                <td>5</td>
            </tr>
        </tbody>

    </table>
}

export default Table