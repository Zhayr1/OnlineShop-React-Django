import React from 'react'
import '../css/ProductDetails.scss'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startGetProduct } from '../redux/actions/products'

export function ProductDetails() {

    const dispatch = useDispatch()
    const params = useParams()
    const [ready, setReady] = React.useState(false)

    React.useEffect(() => {
        dispatch(startGetProduct({ payload: { id: parseInt(params.productID,10)}}))
        setTimeout(function() { //Start the timer
            setReady(true)
        }.bind(this), 200)
    }, [])


    const [currentImage, setCurrentImage] = React.useState('')
    const [images, setImages] = React.useState([])

    const loading = useSelector(state => state.productIsLoading)
    const product = useSelector(state => {
        if(state.current_product){
            return state.current_product
        }
    })

    React.useEffect(() => {
        if(product){
            setCurrentImage(product.image)
            setImages(product.images)
        }
    }, [product])

    return (
        <div className='container white fill-screen'>
            <div className="row">
                <Link to="/products">
                    <i className="material-icons medium primary-text scale-btn">arrow_back</i>
                </Link>
                <div className="divider"></div>
            </div>
            {!loading && ready ?
            <React.Fragment>
            <div className="row mt3">
                <div className="col s12 l6 flex">
                    <img className='product-details-image' src={currentImage} alt="product main" />
                    <div className="images-container pl3">
                        <img className='image-thumbnail' key='0' src={product.image} alt={product.name + ' thumbnail'} onMouseEnter={(e) => setCurrentImage(e.target.src)} />
                        {images.map((img, index) => (
                           <img className='image-thumbnail' key={index+1} src={img.image} alt={product.name + ' thumbnail'} onMouseEnter={(e) => setCurrentImage(e.target.src)} />
                        ))}
                    </div>
                </div>
                <div className="col s12 l6 black-text">
                    <div className='pl3'>
                        <h4 className=''>{product.name}</h4>
                        <h1>${product.price}</h1>
                        <h5>Free-Shipping</h5>
                        <p>Avaliable: {product.stock}</p>
                        <br />
                        <button className='btn btn-large primary add-to-cart-btn'>Add To Cart</button>
                        <br />
                        <p><small className='btn-flat btn-small'>Add to wishlist <i className="material-icons icon yellow-text">star</i></small></p>
                    </div>
                </div>
            </div>
            <div className="row black-text">
                <div className="col s12">
                    <h4 className='fw5 primary'>Description</h4>
                    <div className="divider"></div>
                    <p className='description-text' >{product.description}</p>
                </div>
            </div>
            </React.Fragment>
            :''}
        </div>
    )
}
