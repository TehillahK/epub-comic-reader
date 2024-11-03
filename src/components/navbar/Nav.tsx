import {useRef} from "react";

const Nav = ({title,chapterNum, changeReadPreference}:NavProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

   const orientationChange=()=>{
       const isChecked = inputRef.current?.checked;
       if(isChecked === true){
           changeReadPreference(isChecked);
       }else if(isChecked === false){
           changeReadPreference(isChecked);
       }

   }

    return (
        <nav className="navbar">
            <div>
                <h1 className={"heading"}>{title}, Chapter: {chapterNum}</h1>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label className="switch">
                    <input
                        ref={inputRef}
                        type="checkbox"
                        onChange={orientationChange}
                    />
                    <span className="slider round"></span>
                </label>
                Spread
            </div>


        </nav>
    )
}


type NavProps = {
    title: string,
    chapterNum: number,
    changeReadPreference: (isSpread:boolean)=>void,
}

export default Nav;