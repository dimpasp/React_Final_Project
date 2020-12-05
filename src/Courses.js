import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import MyNavbar from './MyNavbar';
{/*
//einai to connection me to json file pou xeirizomaste
const data = require("./db");
const Table = () => {
    const dataImport =data[0];
    function renderHeaderCells(){
        let headerCells=[];

        Object.keys(dataImport).map((x,y)=>{
            let prope=Object.values(dataImport)[y];
            headerCells.push(<td colSpan={Object.keys(prope).length} key={y.title}>{x}</td>);
        })

        return headerCells;
    }
// einai function me tis opoies travame kai xeirizomaste ta data tou json
    function renderSubHeaders(){
        let subHeaders=[]; 
        let sub=Object.values(dataImport);

        sub.map((x,y)=>{
            if (sub[y]!==undefined){
                Object.keys(sub[y]).map(k=>{
                    subHeaders.push(
                        <td>{k}</td>
                    );
                    return subHeaders;
                    });
            }
            return subHeaders;
        });
        return subHeaders;
    }
    function renderResults(){
        let result=[];
        let res=Object.values(dataImport);

        res.map((x,y)=>{
            if (res[y]!==undefined){
                Object.values(res[y]).map(k=>{
                    result.push(
                        <td>{k}</td>
                    );
                    return result;
                    });
            }
            return result;
        });
        return result;
    }
    
    return (
        <React.Fragment>
            <p>Courses</p>
            <table>
                <thead>
                    <tr>{renderHeaderCells()}</tr>
                </thead>
                <tbody>
                    <tr>{renderSubHeaders()}</tr>
                    <tr>{renderResults()}</tr>
                </tbody>
            </table>
        </React.Fragment>
    );

};
export default Table;*/ }