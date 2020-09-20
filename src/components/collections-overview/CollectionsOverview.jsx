import React from "react";
import {CollectionPreview} from "../collection-preview/CollectionPreview";
import './CollectionsOverview.scss';
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(
            ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />
        )}
    </div>
)

const mapStateToProps = ({shop: {collections}}) => ({
    collections
})


export default connect(mapStateToProps)(CollectionsOverview)