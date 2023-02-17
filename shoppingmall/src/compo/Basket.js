import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const Basket = () => {

   let a = useSelector((state)=>state.stock)
    console.log(a)

    return (
        <Table>
            <thead>
                <tr> {/* 행 */}
                    <th>#</th> {/* 열 */}
                    <th>{a}</th>
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
