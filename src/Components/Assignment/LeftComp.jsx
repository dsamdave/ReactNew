import ButtonComp from "./Reusable/ButtonComp"
import ParaComp from "./Reusable/ParaComp"
import TitleComp from "./Reusable/TitleComp"


const LeftComp = () => {
  return (
    <div className="contain">
      <TitleComp title="Today is a great Day" classs="r" />

      <ParaComp p="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At similique quos pariatur aspernatur? Consequuntur incidunt dolor nihil eius reprehenderit placeat molestiae, alias eos nisi eum eaque! Sequi porro cupiditate minus, eos quibusdam nobis voluptate praesentium nemo. Consectetur aliquid at magnam dolore, alias minus porro possimus excepturi in, ipsam quam doloribus!" />

      <ButtonComp name="Read More..." />

    
    </div>
  )
}

export default LeftComp