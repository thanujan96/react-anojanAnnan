
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './components.css'
import React, { Component } from 'react';
import { useForm ,Controller} from "react-hook-form";
import CoordinateInput from 'react-coordinate-input';
export default function Input(props) {
      const { register, handleSubmit, control, watch, errors } = useForm();
      const onSubmit = data =>{
        props.onSub(data);
      };
        return (
          <div className="Input  row align-items-center">
            <div className="col"></div>
            <div className="col-12 col-xs-10 col-sm-8 col-md-8 col-lg-6 mt-4">  
              <form className="card m-4 " onSubmit={handleSubmit(onSubmit)} >
                <div className="card-header"> Input </div>
                <div className="card-body">
                    <div className="form-group row" >
                      <label htmlFor="landSize" className="col-sm-4 col-form-label " >Land size</label>
                      <div className="col-sm-8">
                      <div className="input-group mb-3">
                        <input ref={register({ required: true, min:0 })} type="number" step="0.001" min="0" className="form-control input-field" name="landSize" placeholder="Land size"/>
                        <span>{errors.landSize && <i className="fa fa-exclamation-circle Icon"></i>}</span>
                      </div>
                      </div>
                    </div>
      
                    <div className="form-group row">
                      <label htmlFor="numOfBed" className="col-sm-4 col-form-label">Beds</label>
                      <div className="col-sm-8">
                      <div className="input-group mb-3">
                       <input ref={register({ required: true, min:0 })} type="number" min="0" className="form-control" name="numOfBed" placeholder="Number of beds"/>
                        <span>{errors.numOfBed && <i className="fa fa-exclamation-circle Icon"></i>}</span>
                      </div>
                      </div>
                    </div>
      
                    <div className="form-group row">
                      <label htmlFor="numOfBath" className="col-sm-4 col-form-label">Bathrooms</label>
                      <div className="col-sm-8">
                      <div className="input-group mb-3">
                       <input ref={register({ required: true, min:0 })} type="number" min="0" className="form-control" name="numOfBath" placeholder="Number of bathrooms"/>
                        <span>{errors.numOfBath && <i className="fa fa-exclamation-circle Icon"></i>}</span>
                      </div>
                      </div>
                    </div>
      
                    <div className="form-group row" >
                      <label htmlFor="houseSize" className="col-sm-4 col-form-label " >House size</label>
                      <div className="col-sm-8">
                      <div className="input-group mb-3">
                       <input ref={register({ required: true, min:0 })} type="number" step="0.001" min="0" className="form-control " name="houseSize" placeholder="House size"/>
                        <span>{errors.houseSize && <i className="fa fa-exclamation-circle Icon"></i>}</span>
                      </div>
                      </div>
                    </div>
      
                    <div className="form-group row" >
                      <label htmlFor="location" className="col-sm-4 col-form-label " >Location</label>
                      <div className="col-sm-8">
                      <div className="input-group mb-3">
                       <Controller as={CoordinateInput} rules={{ required: true }} name="location" control={control} defaultValue="" />
                      <span>{errors.location && <i className="fa fa-exclamation-circle Icon"></i>}</span>
                      </div>
                      </div>
                    </div>
                    
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" >estimate</button>
                      </div>
                    </div>
                  </div>
              </form>
              </div>    
            
            <div className="col">
            
            </div>
          </div>
           
        );
      
    
  }
