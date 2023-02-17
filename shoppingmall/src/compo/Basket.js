import React from 'react'
import { Table } from 'react-bootstrap';

const Basket = () => {
    return (
        <Table>
            <thead>
                <tr> {/* 행 */}
                    <th>#</th> {/* 열 */}
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Basket
