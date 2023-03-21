import React from 'react'
import dollarIcon from "../component/images/icon-dollar.svg"
import personIcon from "../component/images/icon-person.svg"
const form = () => {
  return (
    <div className="form">
        <div className="lable-group">
            <label className='label' htmlFor='bill'>Bill</label>
            <input type="number" id="bill" />
            <img src={dollarIcon} alt='' aria-hidden="true" className='icon'/>
        </div>

        <div className="tip-section">
          <div className="lable">Selected Tip %</div>
         <div className="tip-amount-wrapper">
         <div className="tip-amount">
          <input type="radio" id='' name='tip' value='.05'></input>
          <div className="tip-btn">5%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" id='' name='tip' value='.1'></input>
          <div className="tip-btn">10%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" id='' name='tip' value='.15'></input>
          <div className="tip-btn">15%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" id='' name='tip' value='.25'></input>
          <div className="tip-btn">25%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" id='' name='tip' value='.5'></input>
          <div className="tip-btn">50%</div>
        </div>
        <input type="number" id='' className='tip-custom'></input>
         </div>
        </div>

        <div className="lable-group">
          <div className="lable-wrapper">
          <label htmlFor='bill'>Number of People</label>
          <p>Error</p>
          </div>
            <input type="number" id="people" />
            <img src={personIcon} alt='' aria-hidden="true" className='icon'/>
        </div>
    </div>
  )
}
export default form;
