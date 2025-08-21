import HeaderMainPublic from "../../../../components/Header/HeaderMainPublic";
import { LinkgroupWeb } from "../../../../components/Header/LinkgroupWeb";
import { FRONTEND_URL } from "../../../../constants";

export default function StartHeader() {


return (
<>

<HeaderMainPublic linkgroup={ <>

       
        <LinkgroupWeb destination={FRONTEND_URL} button_name='Sign In' /> 

</>}/>

</>
)}