import ButtonComp from "./Reusable/ButtonComp"
import ParaComp from "./Reusable/ParaComp"
import TitleComp from "./Reusable/TitleComp"

const RightComp = () => {
  return (
    <div className="contain" >
      <TitleComp  title="Welcome to Nigeria" />

      <ParaComp p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis quidem aut a quos nisi, vel voluptate ullam placeat sed provident, minima perspiciatis, doloremque alias deserunt odio tenetur accusamus dignissimos?" />

      <ButtonComp name="See More contents..." />

    </div>
  )
}

export default RightComp