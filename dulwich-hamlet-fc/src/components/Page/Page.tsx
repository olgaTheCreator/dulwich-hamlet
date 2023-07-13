const bgColor = [
    {
      color: "black",
      buttonStyle: "bg-black/70  border-black ",
      pageStyle: "bg-blend-multiply",
    },
    {
      color: "pink",
      buttonStyle: "bg-pink/70  border-pink",
      pageStyle: "bg-blend-multiply",
    },
    {
      color: "crazy",
      buttonStyle: "backdrop-invert bg-cyan/70 border-cyan",
      pageStyle: "saturate-200  bg-blend-hue",
    },
    {
      color: "none",
      buttonStyle: "bg-white/40 border-off_white",
      pageStyle: "",
    },
  ] as const;
  
  type BgColorType = (typeof bgColor)[number];

  export const MainPage = ({children}: {children: React.ReactNode}) => {
return <main className="bg-black h-full w-full bg-blend-multiply">{children}</main>
  }