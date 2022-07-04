import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todostate } from "../atom";

interface Iform { 
    todo:string;
}

function Createtodo(){
    const settodo = useSetRecoilState(todostate);
    const {register,handleSubmit,setValue} = useForm<Iform>();
    const handlevalid = ({todo} : Iform) => {
    
        setValue("todo","");
        settodo((oldtodo) => [...oldtodo,{id:Date.now(),text:todo,category:"TO_DO"}]);
    };
    

    return (
        <>
        <h1>To Dos</h1>
        <hr />
        <form onSubmit={handleSubmit(handlevalid)}>
        
          <input
            {...register("todo", {
              required: "Please write a To Do",
            })}
            placeholder="Write a to do"
          />
          <button>Add</button>
        </form>
      </>
    )
}
export default Createtodo;