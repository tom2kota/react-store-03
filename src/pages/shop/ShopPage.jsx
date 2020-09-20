import React from "react";
import {connect} from 'react-redux';
import {CollectionPreview} from "../../components/collection-preview/CollectionPreview";
import './ShopPage.scss';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {collections.map(
                ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />
            )}
    </div>
)

const mapStateToProps = ({shop: {collections}}) => ({
    collections
})

export default connect(mapStateToProps)(ShopPage)