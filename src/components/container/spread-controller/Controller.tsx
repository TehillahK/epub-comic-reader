import {LegacyRef, useEffect} from "react";

const Controller = ({prevPageRef,nextPageRef,pageNum,totalPages}:ControllerProps) => {
    useEffect(
        () => {

    },[pageNum]);
    return (
        <div className={"page-controller"}>
            <div>
                <button ref={prevPageRef}>
                Previous
                </button>
            </div>
            <div>
                <input
                    type={"range"}
                    min={1}
                    max={totalPages}
                    value={pageNum}
                    className={"page-slider"}
                    onChange={(e) => {
                        e.persist();
                    }}
                />
            </div>
            <div>
                <button ref={nextPageRef}>
                next
                </button>
            </div>
        </div>)

}

type ControllerProps = {
    pageNum: number,
    totalPages: number,
    prevPageRef:LegacyRef<HTMLButtonElement>,
    nextPageRef: LegacyRef<HTMLButtonElement>
}

export default Controller;