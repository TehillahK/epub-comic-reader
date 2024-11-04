import {LegacyRef} from "react";

const Controller = ({prevPageRef,nextPageRef}:ControllerProps) => {
    return (
        <div className={"page-controller"}>
        <div>
            <button ref={prevPageRef}>
            Previous
            </button>
            </div>

            <input type="range" min="1" max="100" value="1" className="page-slider" />
    <div>
        <button ref={nextPageRef}>
        next
        </button>
        </div>
        </div>)

}

type ControllerProps = {
    prevPageRef:LegacyRef<HTMLButtonElement>,
    nextPageRef: LegacyRef<HTMLButtonElement>
}

export default Controller;