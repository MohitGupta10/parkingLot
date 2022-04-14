import React from 'react';
import ParkingList from './data';
import {useSelector} from 'react-redux';

export function Parking()
{
	let todos=useSelector(state=>state);

	return(
		<div className="my-4">

			<h1 className="text-center">Book Slots</h1>

		<hr/>
		{
			todos.map(todo=>
			{
				return <ParkingList key={todo.id} todo={todo}/>
			})
			
		}
		</div>
		)
		}

