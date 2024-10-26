import Buttons from "./Buttons";

const ButtonList = ()=>{
    return(
        <div className="flex mt-2">
            <Buttons name="All"/>
            <Buttons name="Music"/>
            <Buttons name="Recruitment"/>
            <Buttons name="iOs"/>
            <Buttons name="Mixes"/>
            <Buttons name="Cricket"/>
            <Buttons name="Software Engineering"/>
            <Buttons name="Lessons"/>
            <Buttons name="Cars"/>
            <Buttons name="Rcently Uploaded"/>
            <Buttons name="Watched"/>
            <Buttons name="New to you"/>
        </div>
    )
}
export default ButtonList;