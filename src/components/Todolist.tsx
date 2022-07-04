import { useSetRecoilState } from "recoil";
import { Itodo, todostate } from "../atom";

function Todolist({text,category,id}:Itodo){
    const settodos = useSetRecoilState(todostate);
    const onclickfn = (event: React.MouseEvent<HTMLButtonElement>)=>{
        
        const {currentTarget : {name}} = event;
        

        settodos((oldtodos) => {
            const targetindex = oldtodos.findIndex((todo)=>todo.id===id);
            const oldtodo = oldtodos[targetindex];
            const newtodo = {id,text,category : name as Itodo['category']};
            console.log(newtodo);
            console.log(id,text);
            
            return [
                ...oldtodos.slice(0,targetindex),
                newtodo,
                ...oldtodos.slice(targetindex+1)]; 
        });
       


    };
    return (
     <li>
         <span>{text}</span>
         {category !== "DOING" && (<button onClick={onclickfn} name="DOING">doing</button>)}
         {category !== "TO_DO" && (<button onClick={onclickfn} name="TO_DO">to do</button>)}
         {category !== "DONE" && <button onClick={onclickfn} name="DONE">done</button>}
         
     </li>   
    )
}
export default Todolist;