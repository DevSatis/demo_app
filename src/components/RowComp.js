import { slotFlagsText } from "@vue/shared";
import SideBar from "./SideBar";
import TextEditor from "./TextEditor";

const divStyle = {
    backgroundColor:'lightblue',
    display: 'flex',
    flexDirection:'row'
};

function RowComp(){
    return(
        <div className="rowC" style={divStyle}>
            <SideBar />
            <TextEditor />

        </div>
    )
}
export default RowComp;