import { useQuery } from '@tanstack/react-query';
import React from 'react';
// const url = http://localhost:5000/subject?subject=Science&class=C5
const TableSubject = ({ classes, subject }) => {
    const { data: scienceSubject = [], refetch, isLoading } = useQuery({
        queryKey: ['scienceSubject', subject, classes],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/subject?subject=${subject}&class=${classes}`);
            const data = await res.json();
            return data;
        },
    });

    console.log(scienceSubject);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const tableLength = 15;
    const existingLineNumbers = scienceSubject.map((data) => parseInt(data.week));
    const missingLineNumbers = Array.from({ length: tableLength })
        .map((_, index) => index + 1)
        .filter((lineNumber) => !existingLineNumbers.includes(lineNumber));

    const result = missingLineNumbers.filter((lineNumber) => lineNumber <= tableLength);
    return (
        <div>
            <div className="flex justify-center">
                <table className="table text-center w-1/2">
                    <thead>
                        <tr>
                            {/* <th className="w-1/3">index</th> */}
                            <th className="w-1/3">week</th>
                            {/* <th className="w-1/3">class</th> */}
                            <th className="w-1/3">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scienceSubject.map((data, index) => (
                            <tr key={index}>
                                <td>{data.week}</td>
                                <td>
                                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                                        click here
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <p>Missing Line Numbers: {missingLineNumbers.join(', ')}</p> */}
            <p className='text-center mt-8 mb-16'><span className='font-bold'>weeks not uploaded</span>: {result.join(', ')}</p>
        </div>
    );
};

// export default TableScience;


export default TableSubject;