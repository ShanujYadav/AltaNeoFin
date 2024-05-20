import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const LoanForm1 = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(0)
  const [date, setDate] = useState(Date.now())

  const [data, setData] = useState({
    fname: '',
    lname: '',
    turnOver: '',
    mobile: '',
    panNo: "",
    gender: "",
    dob: date,
  })



  const onClickBack = () => {

  }

  const onFetchDetails = () => {
    // dispatch(getUserDetails(data))
    setStep(1)
    console.log('date==', date);
  }

  const onClickNext = () => {
    setStep(2)
  }

  const onClickSubmit = () => {
  }


  return (
    <div className="card"
      style={{ height: "70vh", width: "122vh", overflowY: "scroll", boxShadow: 'none' }}>
      {step === 0 && (
        <div>
          <ProgressBar now={0} />
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">ANNUAL TUERNOVER</label>
              <select
                className='form-select text-muted'
              // className={showError.category ? 'form-select is-invalid' : 'form-select'}
              // onChange={(e) =>
              //   setData({ ...data, category: e.target.value })
              // }
              // value={data.category}
              >
                <option value="">Annual Turnover</option>
                <option value="">1 cr-50 cr</option>
                <option value="">50-250 cr</option>
                <option value="">250-500 cr</option>
                <option value="">500-1000 cr</option>
                <option value="">1000 cr & above</option>
              </select>
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <label className="my-2 text-bold">PAN CARD</label>
              <input type="text" className='form-control' placeholder='Enter Pan No.' />
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold" >FIRST NAME</label>
              <input type="text" className='form-control text-muted' placeholder='Enter First Name'
                onChange={(e) => setData(e.target.value)} value={data.fname}
              />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <label className="my-2 text-bold" >LAST NAME</label>
              <input type="text" className='form-control text-muted' placeholder='Enter Last Name'
                onChange={(e) => setData(e.target.value)} value={data.lname}
              />
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">EMAIL</label>
              <input type="text" className='form-control' placeholder='Enter Email' />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <div className='float-end mt-5'>
                <button type="" className="end btn-primary" onClick={onFetchDetails}>Fetch Details</button>
              </div>
            </div>
          </div>
        </div>
      )}


      {step === 1 && (
        <div>
          <ProgressBar now={25} />
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">DATE OF BIRTH</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={70}
                className='form-control'
                // className={showError.dob ? 'form-control is-invalid' : 'form-control'}
                autoComplete="off"
                placeholder="Enter DOB"
              />
            </div>
            <div className="col-2">
            </div>

            <div className="col-5">
              <label className="my-2 text-bold">GENDER</label>
              <select
                // className={showError.gender ? 'form-select is-invalid' : 'form-select'}
                className='form-select'
                onChange={(e) => setData({ ...data, gender: e.target.value })}
                value={data.gender}>
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">PIN CODE</label>
              <input type="text" className='form-control' placeholder='Enter Pincode' />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <div className='float-end'>
                <button type="" className="btn-primary" onClick={onClickNext}>Next</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <ProgressBar now={50} />
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">GST REGISTERED</label>
              <input type="text" className='form-control' placeholder='Gst Registred' />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <label className="my-2 text-bold">YEARLY SALES</label>
              <input type="text" className='form-control' placeholder='Yearly Sales' />
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">BUSINESS AGE</label>
              <input type="text" className='form-control' placeholder='Gst Age' />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <label className="my-2 text-bold">GST No.</label>
              <input type="text" className='form-control' placeholder='Gst No' />
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
              <label className="my-2 text-bold">BUSINESS TYPE</label>
              <input type="text" className='form-control' placeholder='Business Type' />
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <label className="my-2 text-bold">BUSINESS PINCODE</label>
              <input type="text" className='form-control' placeholder='Business Pincode' />
            </div>
          </div>
          <div className='row mx-5 mt-5'>
            <div className="col-5">
            </div>
            <div className="col-2">
            </div>
            <div className="col-5">
              <div className='float-end'>
                <button type="" className="end btn-primary" onClick={onClickSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default LoanForm1