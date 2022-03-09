import React from "react";

const IndividualData = ({ IndividualExcelData }) => {
    return (
        <>
            <th>{IndividualExcelData.Id}</th>
            <th>{IndividualExcelData.Name}</th>
            <th>{IndividualExcelData.Age}</th>
            <th>{IndividualExcelData.Country}</th>
           
        </>
    )
}

export default IndividualData;