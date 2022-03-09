import React from "react";
import IndividualData from './IndividualData'

 const Data = ({excelData}) => {
    return excelData.map((individualExcelData) =>(
        <tr key={individualExcelData.Id}>
            <IndividualData individualExcelData = {individualExcelData}/>
        </tr>
    ))
}

export default Data;

// const data = [
//     {
//         EmpId: 1,
//         name: "John",
//         age: 26,
//         country: "USA"
//     },
//     {
//         EmpId: 2,
//         name: "Ali",
//         age: 23,
//         country: "India"
//     },
//     {
//         EmpId: 3,
//         name: "Alam",
//         age: 24,
//         country: "India"
//     },
//     {
//         EmpId: 4,
//         name: "Saurav",
//         age: 6,
//         country: "USA"
//     },
//     {
//         EmpId: 5,
//         name: "Mohan",
//         age: 26,
//         country: "USA"
//     },
//     {
//         EmpId: 6,
//         name: "Sita",
//         age: 28,
//         country: "USA"
//     }
// ]
// export default data;



