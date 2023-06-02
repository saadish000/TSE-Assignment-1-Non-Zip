import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { CustomTable } from "../Utils/CustomTable";

//The TopProductTable is getting data from props and then destructing it in dataJson and contains an array of objects.

const TopProductTable = (props) => {
    const { dataJson } = props;
    const columns = [
        { title: "Product description", field: "description" },
        { title: "Quantity", field: "quantity" },
    ];
    return (
        <>
            <CustomTable
                data={dataJson}
                columns={columns}
                title={`Top Product Table `}
            ></CustomTable>
        </>
    );
};
export { TopProductTable };
