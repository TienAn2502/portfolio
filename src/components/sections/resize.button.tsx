/**
 * Nếu component truyền vào là TSX thì có thể dùng React.ReactNode
 * Dùng khi bạn truyền một component như biến để bạn render lại nó bên trong thì dùng React.ComponentType
 *
 */
interface Iprops {
  btnText: string;
  btnIcons?: React.ReactNode;
  btnStyle?: React.CSSProperties;
  scrollInto?: () => void;
}
const ResizeButton = (props: Iprops) => {
  const { btnText, btnIcons, btnStyle, scrollInto } = props;

  return (
    <button className="resize-button" style={btnStyle} onClick={scrollInto}>
      <span style={{ textTransform: "uppercase" }}>{btnText}</span>
      <>{btnIcons}</>
    </button>
  );
};

export default ResizeButton;
