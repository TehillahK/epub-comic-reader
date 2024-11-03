import Rendition from "../types/rendition.ts";

export const scrolledRendition: Rendition = {
    manager: "continuous",
    flow: "scrolled",
    width: "100vw",
    height: "100%"
}


export const spreadRendition: Rendition = {
    manager: "continuous",
    flow: "paginated",       // What makes it a thread
    width: "100%",
    height: "100%",
}
