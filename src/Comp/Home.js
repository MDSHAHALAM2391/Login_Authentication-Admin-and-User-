
import React, { useState } from 'react'
import Data from './Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import * as XLSX from 'xlsx'

const Home = () => {

    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    const [excelData, setExcelData] = useState(null);

    console.log(excelFile);
    //handle file
    const fileType = ['application/vnd.ms-excel'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            // console.log(selectedFile.type);
            if (selectedFile&&fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else {
                setExcelFileError('please select only excel file');
                setExcelFile(null);
            }
        }
        else {
            console.log('plz select your file')
        }
    }
    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
        } else {
            setExcelData(null);
        }
    }
    return (
        <div className="container">

            {/* upload files */}
            <div className="form">
                <form className="form-group" autoComplete="off"
                    onSubmit={handleSubmit}>

                    <label><h5>Upload Excel File</h5></label>
                    <br></br>
                    <input type="file" className="form-control"
                        onChange={handleFile} required>
                        {excelFileError&&<div className='text-danger' style={{ marginTop: 5 + 'px' }}>excelFileError</div>}
                    </input>
                    <button type="submit" className="btn btn-success" style={{ marginTop: 5 + 'px' }}>Submit</button>
                </form>
                <div className="container text-center mt-40">
                    <ReactHTMLTableToExcel
                        className="btn btn-info"
                        table="emp-table"
                        filename="Emp excel file"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                    />
                </div>
                <br></br>
                <hr></hr>
                {/* view files */}
                <h5>View Excel file</h5>
                <div className="viwer">
                    {excelData === null && <>No file selected</>}
                    {excelData !== null && (
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>EmpId</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Age</th>
                                        <th scope='col'>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                         <Data excelData={excelData}/>
                                </tbody>
                            </table>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home;




























// // // import React, { Component } from "react";
// // // import data from '../Comp/Data'
// // // import ReactHTMLTableToExcel from 'react-html-table-to-excel'
// // // export default class Home extends Component {
// // //   render() {

// // //     console.log(data)
// // //     return (
// // //       <div>
// // //         <section className="py-4 container">
// // //           <div className="row justify-content-center">
// // //             <table className="table table-striped" id="emp-table">
// // //               <thead>
// // //                 <tr>
// // //                   <td>Employer Id</td>
// // //                   <td>Name</td>
// // //                   <td>Age</td>
// // //                   <td>Country</td>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {data.map((item, index) => {
// // //                   return (
// // //                     <tr key={index}>
// // //                       <td>{item.EmpId}</td>
// // //                       <td>{item.name}</td>
// // //                       <td>{item.age}</td>
// // //                       <td>{item.country}</td>
// // //                     </tr>
// // //                   )
// // //                 })}
// // //               </tbody>
// // //             </table>
// // //             <div className="container text-center mt-40">
// // //               <ReactHTMLTableToExcel
// // //                 className="btn btn-info"
// // //                 table="emp-table"
// // //                 filename="Emp excel file"
// // //                 sheet="Sheet"
// // //                 buttonText="Export tp Excel"

// // //               />
// // //             </div>
// // //           </div>

// // //         </section>
// // //       </div >
// // //     )
// // //   }
// // // }