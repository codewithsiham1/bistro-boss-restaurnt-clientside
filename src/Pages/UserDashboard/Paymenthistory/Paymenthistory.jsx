import React from 'react';
import Useauth from '../../../Hooks/Useauth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const Paymenthistory = () => {
    const { user } = Useauth();
    const axiosSecure = UseAxiosSecure();

    // TanStack Query to fetch payments
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full border">
                    <thead className='bg-gray-200 text-gray-800'>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td className="text-blue-600 font-mono">{payment.transactionId}</td>
                                <td>${payment.price}</td>
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                                <td>
                                    <span className='badge badge-success'>{payment.status || "Success"}</span>
                                </td>
                            </tr>
                        ))}
                        {payments.length === 0 && (
                            <tr>
                                <td colSpan="5" className='text-center text-gray-500'>No payment history found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Paymenthistory;
