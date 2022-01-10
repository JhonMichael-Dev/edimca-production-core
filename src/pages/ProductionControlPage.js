import React, { Component } from "react";

import { observer } from "mobx-react";
import { computed } from "mobx";
import { inject } from "mobx-react";

import { ProductionControlComp } from "../components/ProductionControlComp";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
//import { InputFloatLabel } from "../components/InputFloatLabel";

export class ProductionControlPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
        };
    }

    /*
    componentDidMount() {
        //console.log("componentDidMount");
        this.props.DataStore.setSelStore("store X");
        //console.log("selStore: ", this.props.DataStore.getSelStore());
    }
    */

    /*
  Methods
  */
    render() {
        return (
            <div className="p-grid p-fluid">
                <ProductionControlComp DataStore={this.props.DataStore} />
            </div>
        );
    }
}

ProductionControlPage = observer(ProductionControlPage, {
    loading: computed,
});

export default inject("DataStore")(ProductionControlPage);