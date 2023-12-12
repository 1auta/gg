interface ContainerPropsType {
    children: React.ReactNode;
}
export function Container(props:ContainerPropsType) {
    const { children } = props;
    return(
        <div className="px-10 mx-auto max-w-screen-2xl sm:max-w-md s:max-w-xs sm:px-2 xs:max-w-[420px]">{children}</div>
    )
}