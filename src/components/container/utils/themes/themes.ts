/**
 *  @fileOverview themes for epub reader that define how the pages load on screen
 */
export const scrollTheme ={
    img:{
        width:"100vw !important",
        'max-width': '100% !important',
        willChange: "transform !important",
        // height:"100vh !important",
        //   'max-height':'80% !important',
        objectFit: "none !important",
    },
    h1:{
        display:"none",
        padding:"0px",
        margin:"0px",
    },
    nav: {
        display: "none !important",
    },
    body:{
        padding:"0px 0px !important",
        margin:"0px !important",
        // willChange: "transform !important",
        width:"100wh !important",

        height:"100vh !important",

    }
}

export const spreadTheme ={
    img:{
      //  width:"100vw !important",
     //   'max-width': '100% !important',
        willChange: "transform !important",
      //   height:"100vh !important",
        'max-height':'100vh !important',
        objectFit: "fill",
    },
    h1:{
        display:"none",
        padding:"0px",
        margin:"0px",
    },
    nav: {
        display: "none !important",
    },
    body:{
        padding:"0px 0px !important",
        margin:"0px !important",
        // willChange: "transform !important",
        width:"100wh !important",

        height:"100vh !important",
        "padding-left":"0px !important",
        "padding-right":"0px !important",

    }
}