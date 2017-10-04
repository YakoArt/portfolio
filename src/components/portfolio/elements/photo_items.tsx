import * as React from 'react';

// tslint:disable-next-line:interface-name
interface IPhotoItemsProps {
    imgUrl: any;
    id?:any
    category: any;
}
// tslint:disable-next-line:interface-name
interface IPhotoItemsState {}

class PhotoItems extends React.Component<IPhotoItemsProps, IPhotoItemsState> {
    constructor(props:any) {
        super(props);
    }
    render() {
        const ImgUrl: any = this.props.imgUrl;
        const ID: any = this.props.id;
        const CategoryItem: any = this.props.category;
        return (
            <div  className="portfolio--img-wrap" key={ID}>
                <img src={ImgUrl} data-category={CategoryItem} />
            </div>
        );
    }
}
export default PhotoItems;