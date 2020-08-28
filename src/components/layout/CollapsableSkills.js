import React from 'react'
import Collapsible from 'react-collapsible';

const CollapsableSkills = (props) => {

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 bg-dark" >
                    <Collapsible trigger={props.collapaseTitle}>
                        <p>{props.collapseItem}</p>
                    </Collapsible>
                </div>
            </div>
        </div>

    )

}

export default CollapsableSkills;