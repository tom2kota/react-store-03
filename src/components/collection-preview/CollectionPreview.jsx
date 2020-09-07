import React from "react";
import {CollectionItem} from "../collection-item/CollectionItem";
import './CollectionPreview.scss';

export const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({id, ...otherItemProps}) =>
                    // (item) => <div key={item.id}>{item.name}</div>
                    <CollectionItem key={id} {...otherItemProps} />
                )
            }
        </div>
    </div>
)