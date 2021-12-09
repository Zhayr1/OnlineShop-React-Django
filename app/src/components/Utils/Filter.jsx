import React from 'react'
import '../../css/filter.scss'

export function Filter() {

    const [state, setState] = React.useState(true)

    return (
        <div>
            <div className="col s2 mt3">
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" defaultChecked={state} onClick={() => { setState(!state) }} />
                        <span className={!state ? 'grey-text':'black-text'}>Show All</span>
                    </label>
                </p>
            </div>
            <div className="col s1 mt3">
                <p>
                    <span className={state ? 'grey-text':''}>Custom </span>
                </p>
            </div>
            <div className="col s1 mt3">

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" disabled={state} />
                        <span>Shirts</span>
                    </label>
                </p>
            </div>
            <div className="col s1 mt3">

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" disabled={state} />
                        <span>Pants</span>
                    </label>
                </p>
            </div>
            <div className="col s1 mt3">
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" disabled={state} />
                        <span>Shoes</span>
                    </label>
                </p>
            </div>
            <div className="col s4">
                <span className={state ? 'grey-text':''}>Price Range: </span>
                <div className="input-field inline">
                    <input id="email_inline" type="text" className="price_range_filter" disabled={state}/>
                    <label htmlFor="email_inline">0</label>
                </div>
                 -  
                <div className="input-field inline">
                    <input id="email_inline" type="text" className="price_range_filter" disabled={state}/>
                    <label htmlFor="email_inline">1000</label>
                </div>
            </div>
        </div>
    )
}
