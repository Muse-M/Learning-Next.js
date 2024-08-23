import DashboardSkeleton from "../../ui/skeletons"

export default function Loading(){
    return <DashboardSkeleton/>
}
{/*loading.tsx is a special next.js file that shows while 
    page is loading.
    
    Sidenav is still visible and interactable beacause it is static
    This is called interuptable navigation*/

 /*Dashboardskeleton shows a simple view of the page without any the data
 while the data is being fetched 
 
 to make sure this layout is only applied to dashboard and not
 any of the lower levels i.e cutomers and invoices, then you add
 it to a new file with a name that's in brackets. This means it's
 not accsessable via url
 
 */}