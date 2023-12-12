interface ContainerPropsType {
    children: React.ReactNode;
}
export function Container2(props:ContainerPropsType) {
    const { children } = props;
    return(
        <div className="px-10 max-w-[1520px] mx-auto sm:max-w-md s:max-w-xs sm:px-2 xs:max-w-[420px]">{children}</div>
    )
}