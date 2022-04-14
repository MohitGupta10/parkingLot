import {ADD_TODO,DELETE_TODO} from './actions';
import {todos} from './states';
export let reducer=(state=todos,action)=>
{
	let newTodos=[...state];
	switch (action.type)
	{
		case ADD_TODO:
		
		newTodos=[...state];
		let index=-1;
		for(let i=0;i<newTodos.length;i++)
		{
			if(action.payload.id<=20)
			{
				index++;
			if(newTodos[i].id==action.payload.id && newTodos[i].name==null)
				break;
			}
			if(action.payload.id==null)
			{index++;
				if(newTodos[i].name==null )
					break;
			}
			
		}
		if(index!=-1)
		{

			newTodos[index]=action.payload;
			newTodos[index].id=index+1;
			return newTodos;
		}

			break;
		case	DELETE_TODO:
		newTodos=[...state];
		let index1=-1;
		for(let i=0;i<newTodos.length;i++)
		{
			index1++;
			if(newTodos[i].id==action.payload.id)
				break;
		}
		if(index1!=-1)
		{
			newTodos[index1]=action.payload;
			return newTodos;
		}
		 
		break;
		

			default :
			break;
	}
	return state;
}