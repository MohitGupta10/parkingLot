import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../reducers/actions";
import { addTodo } from "../reducers/actions";
import "./Todo.css";
function ParkItems({ todo }) {
  let dispatch = useDispatch();
  //let id = todo.id;
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [vehicle, setVehicle] = useState();
  return (
    <div>
      {todo.name ? (
        <div className="col mx-auto  border border-dark m-3 bg-light hero-image-booked">
          <div className="p-2 text-white text-center">
            <strong>This slot is booked</strong>
          </div>
          <div className="p-1 text-white text-center">
            <strong> Parking Slot No.#{todo.id}</strong>
          </div>
          <div className="p-2 text-white text-center">
            <h4>
              {" "}
              <strong>{todo.name}</strong>
            </h4>
          </div>
          <div className="p-2 text-white text-center">
            <h4>
              {" "}
              <strong>{todo.phone}</strong>
            </h4>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                setPhone("");
                setName("");
                dispatch(
                  deleteTodo({
                    ...todo,
                    name: name,
                    phone: phone,
                    vehicle: vehicle,
                  })
                );
              }}
              className="btn btn-danger border border-white m-2"
            >
              {" "}
              <strong>Leave </strong>
            </button>
          </div>
        </div>
      ) : (
        <div className="col m-3 bg-light   hero-image-empty">
          <div className="p-2 text-center ">
            <strong> Parking Slot No. #{todo.id}</strong>
          </div>
          <label className="text-center">
            <strong>Enter Your name</strong>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col form-control"
          />
          <label className="text-center">
            <strong>Enter phone number</strong>
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="col form-control"
          />

          <label className="text-center">
            <strong>Enter vehicle type</strong>
          </label>
          <input
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="col form-control"
          />

          <div className="text-center">
            <button
              onClick={() => {
                dispatch(
                  addTodo({
                    ...todo,
                    name: name,
                    phone: phone,
                    vehicle: vehicle,
                  })
                );
                setPhone("");
                setName("");
                setVehicle("");
              }}
              className="btn btn-dark border border-white m-2"
            >
              <strong>BOOKSLOT</strong>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ParkItems;
