import { headerBoxProps } from "@/props/componentProps"

const HeaderBox = ({type="title",title,subtext,user}) =>{
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                <span className="text-bankGradient">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
      
    </div>
  )
}

HeaderBox.propTypes=headerBoxProps

export default HeaderBox
