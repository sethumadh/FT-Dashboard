import { cva } from "class-variance-authority";

export const modalStyles = cva(
    // styles all modals will have
    "relative overflow-y-auto top-[100px] mx-auto flex flex-col rounded-md shadow-xl",
    {
      variants: {
        maxWidth: {
          // no size means none of the classes here apply
  
          // you can still use breakpoints to style for each screen size
          // this only affects the maximum screen width
          sm: "w-full max-w-xs",
          md: "w-full max-w-lg",
          lg: "w-full max-w-3xl",
          xl: "w-full max-w-5xl",
          "2xl": "w-full max-w-7xl",
        },
      },
    }
  )