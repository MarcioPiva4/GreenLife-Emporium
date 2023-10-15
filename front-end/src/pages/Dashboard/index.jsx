/*import DashboardUser from "../../components/Dashboard";

import DashboardAdmin from "../../components/DashboardAdmin";*/
import DashboardUser from "../../components/Dashboard"

export default function Dashboard(){
    //recuperar se é admin ou não e renderiza com base nesse dado
    /*const admin = requisicao;


    admin ? <DashboardAdmin></DashboardAdmin> : <DashboardUser></DashboardUser>*/


    return(
        <>
            <h1>Welcome to dashboard</h1>
            <DashboardUser></DashboardUser>
            
        </>
    )
}