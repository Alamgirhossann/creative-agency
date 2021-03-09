import React from 'react';
import { Spinner } from 'react-bootstrap';

const AdminStatustable = ({ allOrders }) => {

    return (
        <div style={{ backgroundColor: 'white'}}>
            {allOrders.length === 0 ?
                <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100%", width:"100%"}}>
                    <Spinner animation="border"/>
                </div>
                :<div>
                    <table className="table table-borderless mt-3">
                <thead>
                    <tr style={{ backgroundColor: '#f2eeed' }}>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Detail</th>
                        <th className="text-secondary" scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((orders) =>

                            <tr>
                                <td>{orders.name}</td>
                                <td>{orders.email}</td>
                                <td>{orders.design}</td>
                                <td>{orders.detail}</td>
                                <td>
                                    <form action="/">
                                        <select style={{ border: "none", outline: "none" }}>
                                            <option style={{ color: 'red' }} value="Pending">Pending</option>
                                            <option style={{ color: 'blue' }} value="On going">On going</option>
                                            <option style={{ color: 'green' }} value="Done">Done</option>
                                        </select>
                                    </form>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
                </div>
            }
        </div>
    );
};

export default AdminStatustable;