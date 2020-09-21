import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import './ShopPage.scss';

export const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    </div>
)